(() => {
  document.documentElement.classList.add("js");
  document.querySelectorAll("[data-vibrance-carousel]").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".vibrance-slide"));
    const previous = carousel.querySelector("[data-vibrance-prev]");
    const next = carousel.querySelector("[data-vibrance-next]");
    const dotsHost = carousel.querySelector("[data-vibrance-dots]");
    const counter = carousel.querySelector("[data-vibrance-counter]");
    const progress = carousel.querySelector("[data-vibrance-progress]");
    if (!slides.length || !previous || !next || !dotsHost || !counter) return;

    let current = 0;
    let pointerStart = null;
    const dots = slides.map((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "vibrance-dot";
      dot.setAttribute("aria-label", "Afficher la séquence " + (index + 1));
      dot.addEventListener("click", () => show(index));
      dotsHost.appendChild(dot);
      return dot;
    });

    function show(index) {
      current = Math.max(0, Math.min(index, slides.length - 1));
      slides.forEach((slide, i) => {
        const active = i === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, i) => {
        if (i === current) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      previous.disabled = current === 0;
      next.disabled = current === slides.length - 1;
      counter.textContent = String(current + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
      if (progress) progress.style.width = ((current + 1) / slides.length * 100) + "%";
    }

    previous.addEventListener("click", () => show(current - 1));
    next.addEventListener("click", () => show(current + 1));
    carousel.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button, a")) return;
      pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
    });
    carousel.addEventListener("pointerup", (event) => {
      if (!pointerStart || pointerStart.id !== event.pointerId) return;
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.2) show(current + (dx < 0 ? 1 : -1));
      pointerStart = null;
    });
    carousel.addEventListener("pointercancel", () => { pointerStart = null; });
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); show(current - 1); }
    });
    carousel.tabIndex = 0;
    show(0);
  });
})();
