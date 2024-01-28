function playMusic() {
  var lovePopup = document.getElementById('lovePopup');
  lovePopup.classList.remove('hidden');
  document.getElementById('musicPlayer').play();
}
function playMusic() {
  var musicPlayer = document.getElementById('musicPlayer');
  musicPlayer.play();
}
document.addEventListener('DOMContentLoaded', function () {
  var lovePopup = document.getElementById('lovePopup');
  lovePopup.addEventListener('click', function () {
    lovePopup.classList.add('hidden');
    document.getElementById('musicPlayer').pause();
  });
});
