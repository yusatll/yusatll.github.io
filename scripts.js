const YOUTUBE_API_KEY = 'AIzaSyDoNPXeCZqmnRkkEhOT0i3XdGoX23YR59A';
const CHANNEL_ID = 'UCbp2rjb5uIbvze1WkOZtLug';

async function fetchYouTubeVideos() {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`);
    const data = await response.json();
    const videoContainer = document.getElementById('youtube-videos');

    data.items.forEach(item => {
        const videoElement = document.createElement('iframe');
        videoElement.src = `https://www.youtube.com/embed/${item.id.videoId}`;
        videoElement.width = "100%";
        videoElement.height = "315";
        videoElement.frameBorder = "0";
        videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        videoElement.allowFullscreen = true;
        videoContainer.appendChild(videoElement);
    });
}

fetchYouTubeVideos();
