import { Scene } from "./components/Scene";
import { Player } from "./components/Player";
import { Map } from "./components/Map"
import { Score } from "./components/Score"
import { Controls } from "./components/Controls";
import { Result } from "./components/Result";
import { Audio } from "./components/audio";
import "./Game.css";

export default function Game() {
    return (
        <div className="game">
            <Scene>
                <Player />
                <Map />
            </Scene>
            <Score />
            <Controls />
            <Result />
            <Audio />
        </div>
    );
}