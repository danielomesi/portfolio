function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openModal(videoSrc) {
  var videoElement = document.getElementById('demoVideo');
  var sourceElement = document.getElementById('videoSource');
  sourceElement.src = videoSrc;
  videoElement.load(); // Reload the video to apply the new source
  document.getElementById('videoModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('videoModal').style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target == modal) {
    closeModal();
  }
}