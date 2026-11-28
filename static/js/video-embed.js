document.addEventListener("click", function (event) {
  const trigger = event.target.closest("[data-wo-video-trigger]");
  if (!trigger) return;
  const frame = trigger.closest("[data-wo-video]");
  if (!frame || frame.dataset.loaded === "true") return;
  const id = frame.dataset.videoId;
  if (!/^[A-Za-z0-9_-]{11}$/.test(id || "")) return;
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
  iframe.title = frame.dataset.videoTitle || "Lecteur vidéo YouTube";
  iframe.loading = "eager";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  frame.dataset.loaded = "true";
  frame.replaceChildren(iframe);
});