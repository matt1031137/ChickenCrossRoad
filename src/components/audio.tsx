import React from 'react';
import './audio.css';

export const Audio: React.FC = () => {
    return (
        <>
            <audio id="jump" src="./public/jump.wav"></audio>
            <audio id="die" src="./public/die.mp3"></audio>
        </>
    );
};