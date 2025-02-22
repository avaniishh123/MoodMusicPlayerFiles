const moodMusic = {
    Happy: 'audio/happy-music.mp3', // Placeholder for happy music
    Sad: 'audio/sad-music.mp3',     // Placeholder for sad music
    Relaxed: 'audio/relaxed-music.mp3', // Placeholder for relaxed music
    Energetic: 'audio/energetic-music.mp3', // Placeholder for energetic music
    Romantic: 'audio/romantic-music.mp3', // Placeholder for romantic music
    Focused: 'audio/focused-music.mp3',   // Placeholder for focused music
    Mirage: 'C:\\Users\\User\\OneDrive\\MoodMusicPlayer\\Mirage melody - Patrick Patrikios.mp3' // Full path to your audio file
};

const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const moodSelect = document.getElementById('mood-select');
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');

playButton.addEventListener('click', () => {
    const selectedMood = moodSelect.value;
    if (moodMusic[selectedMood]) {
        audioSource.src = moodMusic[selectedMood]; // Set the source
        audioPlayer.load(); // Load the new audio source
        audioPlayer.play(); // Play the audio
    }
});

stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset to the beginning
});
