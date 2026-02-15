// Configuration
const totalImages = 50;
const slideDuration = 5000; // 5 seconds per slide
let currentImageIndex = 0;
let isPlaying = true;
let slideInterval;

// Elements
const animalImage = document.getElementById('animal-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const animalPhraseEl = document.getElementById('animal-phrase');
const translationEl = document.getElementById('translation');

// Audio elements
const sounds = [
    document.getElementById('sound-1'),
    document.getElementById('sound-2'),
    document.getElementById('sound-3'),
    document.getElementById('sound-4')
];

let currentSoundIndex = 0;

// Language phrases (16 phrases, will cycle)
const phrases = [
    { aviaran: "Kraa-tik shreel ma'voora", translation: "The feeding time approaches" },
    { aviaran: "Fleh-kaw preen zha'hoot", translation: "Danger in the canopy" },
    { aviaran: "Wheep-kik nara bek'kaw", translation: "I claim this branch" },
    { aviaran: "Skraa-mok trill vesh'oop", translation: "The sun is high and warm" },
    { aviaran: "Chit-chitter blaa kree'sha", translation: "Come join the flock" },
    { aviaran: "Kaw-kaw plik nesh'vara", translation: "Water source nearby" },
    { aviaran: "Tweep-shrill zok ma'keera", translation: "My nest, my territory" },
    { aviaran: "Hoot-krek phaa ven'toop", translation: "Night falls soon" },
    { aviaran: "Skree-click moor sha'blat", translation: "Stranger approaches the enclosure" },
    { aviaran: "Preen-kaw zhaa lok'threel", translation: "I see food below" },
    { aviaran: "Chak-trill voop nesh'kaa", translation: "Follow me to safety" },
    { aviaran: "Kreel-skree baa mok'shoor", translation: "The keeper brings grain" },
    { aviaran: "Flap-wheep zha kree'voon", translation: "Make space on the perch" },
    { aviaran: "Hoot-click nara blek'toop", translation: "I am the loudest here" },
    { aviaran: "Skraa-plik maa vesh'keera", translation: "The rain will come" },
    { aviaran: "Kaw-trill zhoop sha'vora", translation: "Good night, flock" }
];

// Update slide
function updateSlide() {
    // Fade out
    animalImage.classList.add('fade');
    
    setTimeout(() => {
        // Update image
        const imageNumber = String(currentImageIndex).padStart(2, '0');
        animalImage.src = `images/animal_${imageNumber}.png`;
        
        // Update phrase (cycle through 16 phrases)
        const phraseIndex = currentImageIndex % phrases.length;
        animalPhraseEl.textContent = phrases[phraseIndex].aviaran;
        translationEl.textContent = phrases[phraseIndex].translation;
        
        // Fade in
        animalImage.classList.remove('fade');
    }, 250);
}

// Navigation functions
function nextSlide() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateSlide();
    
    // Change sound every 12-13 slides
    if (currentImageIndex % 13 === 0) {
        changeSoundTrack();
    }
}

function prevSlide() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateSlide();
}

// Autoplay
function startSlideshow() {
    slideInterval = setInterval(nextSlide, slideDuration);
}

// Sound management
function changeSoundTrack() {
    const currentSound = sounds[currentSoundIndex];
    let volume = currentSound.volume;
    const fadeOut = setInterval(() => {
        volume -= 0.05;
        if (volume <= 0) {
            clearInterval(fadeOut);
            currentSound.pause();
            currentSound.volume = 0.3;
            
            currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
            const nextSound = sounds[currentSoundIndex];
            nextSound.volume = 0;
            nextSound.play();
            
            let newVolume = 0;
            const fadeIn = setInterval(() => {
                newVolume += 0.05;
                nextSound.volume = newVolume;
                if (newVolume >= 0.3) {
                    clearInterval(fadeIn);
                }
            }, 100);
        } else {
            currentSound.volume = volume;
        }
    }, 100);
}

function startAudio() {
    sounds[0].volume = 0.3;
    sounds[0].play().catch(() => {
        document.body.addEventListener('click', () => {
            sounds[0].play();
        }, { once: true });
    });
}

// Event listeners
prevBtn.addEventListener('click', () => {
    prevSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
});

// Initialize
updateSlide();
startSlideshow();
startAudio();