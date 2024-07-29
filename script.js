function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openModal() {
  document.getElementById('videoModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('videoModal');
  modal.style.display = 'none';
  const video = document.getElementById('demoVideo');
  video.pause();
  video.currentTime = 0;
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target == modal) {
    closeModal();
  }
}