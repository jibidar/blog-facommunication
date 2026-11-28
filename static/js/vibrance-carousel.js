(() => {
  document.documentElement.classList.add("js");
  document.querySelectorAll("[data-vibrance-carousel]").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".vibrance-slide"));
    const previous = carousel.querySelector("[data-vibrance-prev]");
    const next = carousel.querySelector("[data-vibrance-next]");
    const dotsHost = carousel.querySelector("[data-vibrance-dots]");
    const counter = carousel.querySelector("[data-vibrance-counter]");
    if (!slides.length || !previous || !next || !dotsHost || !counter) return;

    let current = 0;
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
      counter.textContent = (current + 1) + " / " + slides.length;
    }

    previous.addEventListener("click", () => show(current - 1));
    next.addEventListener("click", () => show(current + 1));

    let touchStartX = 0;
    carousel.addEventListener("touchstart", (event) => {
      if (event.changedTouches.length) touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });
    carousel.addEventListener("touchend", (event) => {
      if (!event.changedTouches.length || !touchStartX) return;
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 55) show(current + (delta < 0 ? 1 : -1));
      touchStartX = 0;
    }, { passive: true });

    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") show(current + 1);
      if (event.key === "ArrowLeft") show(current - 1);
    });
    carousel.tabIndex = 0;
    show(0);
  });
})();