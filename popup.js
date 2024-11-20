document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-video');
    const downloadButton = document.getElementById('download-btn');
    const qualitySelect = document.getElementById('quality-select');
    const progressBar = document.getElementById('progress');
    const errorMessage = document.getElementById('error-message');
    const settingsButton = document.getElementById('settings-btn');
    const helpButton = document.getElementById('help-btn');

    fetchButton.addEventListener('click', () => {
        const url = document.getElementById('youtube-url').value;
        if (!isValidURL(url)) {
            showError("Invalid YouTube URL. Please try again.");
            return;
        }
        fetchVideoDetails(url);
    });

    downloadButton.addEventListener('click', () => {
        const quality = qualitySelect.value;
        startDownload(quality);
    });

    settingsButton.addEventListener('click', () => {
        alert('Settings will be available in the next update.');
    });

    helpButton.addEventListener('click', () => {
        alert('To use this extension, paste a YouTube URL, select quality, and click "Download Now".');
    });

    function isValidURL(url) {
        const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
        return regex.test(url);
    }

    function fetchVideoDetails(url) {
        // Simulate video fetching
        console.log(`Fetching video details for: ${url}`);
        showProgress(0);
        setTimeout(() => showProgress(50), 1000);
        setTimeout(() => showProgress(100), 2000);
    }

    function startDownload(quality) {
        console.log(`Downloading video in ${quality} quality...`);
        showProgress(0);
        setTimeout(() => showProgress(50), 1000);
        setTimeout(() => {
            showProgress(100);
            alert('Download complete!');
        }, 2000);
    }

    function showProgress(percent) {
        progressBar.style.width = `${percent}%`;
    }

    function showError(message) {
        errorMessage.textContent = message;
        setTimeout(() => errorMessage.textContent = '', 3000);
    }
});
