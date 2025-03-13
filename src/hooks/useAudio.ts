export const useAudio = () => {
    const playSound = (soundId: string) => {
        const audio = document.getElementById(soundId) as HTMLAudioElement;
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    };

    return { playSound };
};