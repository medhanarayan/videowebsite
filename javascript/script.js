/*for validating pause and play button*/
function validateVideo(){
var video = document.getElementById("newVideo");
var btn = document.getElementById("myBtn");
  if (video.paused) {
    video.play();
    btn.innerHTML = "PAUSE";
  } else {
    video.pause();
    btn.innerHTML = "PLAY";
  }
}
document
    .getElementById("myBtn")
    .addEventListener("click", validateVideo);