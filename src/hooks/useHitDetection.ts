import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { state as player } from "../stores/player";
import useGameStore from "../stores/game";

export default function useHitDetection(
    vehicle: React.RefObject<THREE.Group | null>,
    rowIndex: number
) {
    const endGame = useGameStore((state) => state.endGame);
    const status = useGameStore((state) => state.status);

    useFrame(() => {
        if (!vehicle.current) return;
        if (!player.ref) return;

        if (
            rowIndex === player.currentRow ||
            rowIndex === player.currentRow + 1 ||
            rowIndex === player.currentRow - 1
        ) {
            const vehicleBoundingBox = new THREE.Box3();
            vehicleBoundingBox.setFromObject(vehicle.current);

            const playerBoundingBox = new THREE.Box3();
            playerBoundingBox.setFromObject(player.ref);

            // 死了就不要在判定碰撞了
            if (status === "over") return;

            if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
                endGame();
            }
        }

    })


}