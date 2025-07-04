document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("playBtn");
    const videoCover = document.getElementById("videoCover");
    const videoFrame = document.getElementById("videoFrame");

    if (playBtn && videoCover && videoFrame) {
        playBtn.addEventListener("click", function () {
            videoCover.style.display = "none";
            videoFrame.style.display = "block";
        });
    }
    
    playBtn?.addEventListener("click", () => {
        videoCover.style.display = "none";
        videoFrame.style.display = "block";
    });
});
// Reproducción automática si es HTML5
const iframe = document.querySelector("#videoFrame iframe");
if (iframe && iframe.src.endsWith(".mp4")) {
  iframe.setAttribute("autoplay", "true");
}
