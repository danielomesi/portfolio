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

// List of video sources and titles
const videos = [
  { src: 'assets/Two Sum.mkv', title: 'Two Sum' },
  { src: 'assets/Three Sum Closest.mkv', title: 'Three Sum Closest' },
  { src: 'assets/Container With Most Water.mkv', title: 'Container With Most Water' },
  { src: 'assets/Zigzag Conversion.mkv', title: 'Zigzag Conversion' }
];

let currentIndex = 0;

function changeVideo(direction) {
  if (direction === 'next') {
      currentIndex = (currentIndex + 1) % videos.length;
  } else if (direction === 'prev') {
      currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  }

   setVideo()
}

function setVideo() {
    // Set the first video explicitly
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    
    videoPlayer.src = videos[currentIndex].src;
    videoTitle.textContent = videos[currentIndex].title;
  
    // Load and play the first video
    videoPlayer.load();
}

window.onload = function() {
    
};