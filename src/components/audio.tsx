import React from 'react';
import './audio.css';

export const Audio: React.FC = () => {
    return (
        <>
            <audio id="jump" src="./audio/jump.wav"></audio>
            <audio id="die" src="./audio/die.mp3"></audio>
        </>
    );
};