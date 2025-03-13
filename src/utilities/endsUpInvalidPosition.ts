import type { MoveDirection } from "../types";
import { calculateFinalPosition } from "./calculateFinalPosition"
import { minTileIndex, maxTileIndex } from "../constants"
import useMapStore from "../stores/map"
// 導入zustand的全域狀態
import useGameStore from "../stores/game";

export function endsUpInvalidPosition(
    currentPosition: { rowIndex: number; tileIndex: number },
    moves: MoveDirection[]
) {
    // 抓zustand狀態變數，若死亡回傳false不能動
    const statue = useGameStore.getState().status;
    if (statue === "over") return false;

    //Calculate where the player would end up after the move
    const finalPosition = calculateFinalPosition(currentPosition, moves);

    //Detect if we hit the edge of the board
    if (
        finalPosition.rowIndex === -1 ||
        finalPosition.tileIndex === minTileIndex - 1 ||
        finalPosition.tileIndex === maxTileIndex + 1
    ) {
        //Invalid move,ignore move command
        return false;
    }

    //Detect if we hit a tree
    const finalRow = 
    useMapStore.getState().rows[finalPosition.rowIndex - 1];
    if (
        finalRow &&
        finalRow.type === "forest" &&
        finalRow.trees.some((tree) => tree.tileIndex ===
            finalPosition.tileIndex)
    ) {
        //Invalid move,ignore move command
        return false;
    }

    return true;
}