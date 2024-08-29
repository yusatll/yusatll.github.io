require('dotenv').config();

// .env dosyasındaki değerleri kullanma
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID;

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

const GITHUB_USERNAME = 'yusatll';

async function fetchGitHubRepos() {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    const repos = await response.json();
    const projectsContainer = document.getElementById('github-projects');

    repos.forEach(repo => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || 'No description available.'}</p>
        `;

        projectsContainer.appendChild(projectElement);
    });
}

fetchGitHubRepos();
