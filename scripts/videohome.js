document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");
  const videoCover = document.getElementById("videoCover");
  const videoFrame = document.getElementById("videoFrame");
  const videoPlayer = document.getElementById("videoPlayer");

  playBtn.addEventListener("click", () => {
    videoCover.style.display = "none";
    videoFrame.style.display = "block";
    videoPlayer.src = "assets/video.mp4"; // o puedes poner YouTube si fuera el caso
  });
});

