import React from 'react';
import './audio.css';

export const Audio: React.FC = () => {
    return (
        <>
            <audio id="jump" src="./jump.wav"></audio>
            <audio id="die" src="./die.mp3"></audio>
        </>
    );
};