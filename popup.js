// Elements
const themeToggle = document.getElementById('theme-toggle');
const progressBar = document.getElementById('progress-bar');
const progress = document.querySelector('.progress');
const notification = document.getElementById('notification');
const videoPreview = document.getElementById('video-preview');

// Theme Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// Download Button
document.getElementById('download-btn').addEventListener('click', () => {
  // Simulate Progress
  progressBar.classList.remove('hidden');
  let progressValue = 0;
  const interval = setInterval(() => {
    progressValue += 10;
    progress.style.width = `${progressValue}%`;
    if (progressValue >= 100) {
      clearInterval(interval);
      progressBar.classList.add('hidden');
      showNotification('✅ Download Complete!');
    }
  }, 500);
});

// Show Notification
function showNotification(message) {
  notification.textContent = message;
  notification.classList.remove('hidden');
  setTimeout(() => notification.classList.add('hidden'), 3000);
}

// Simulate Video Preview
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const url = tabs[0].url;
  if (url.includes('youtube.com/watch')) {
    videoPreview.innerHTML = `<img src="https://img.youtube.com/vi/${extractVideoID(url)}/0.jpg" alt="Video Thumbnail">`;
  }
});

// Extract Video ID
function extractVideoID(url) {
  const regex = /v=([a-zA-Z0-9_-]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}
