import useStore from "../stores/game";
import "./Result.css"
// 導入這兩個處理死亡時監聽enter重新啟動遊戲
import { useEffect, useCallback } from "react";
// 導入死亡音效
import { useAudio } from "../hooks/useAudio";

export function Result() {
    const status = useStore((state) => state.status);
    const score = useStore((state) => state.score);
    const reset = useStore((state) => state.reset);

    // 使用 useCallback 來保持函數引用穩定
    const handleDie = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            reset();
        }
    }, [reset]);


    // 使用 useEffect 來管理事件監聽器
    useEffect(() => {
        if (status === "over") {
            window.addEventListener("keydown", handleDie);
        }

        // 清理函數 - 組件卸載或依賴項改變時執行
        return () => {
            window.removeEventListener("keydown", handleDie);
        };
    }, [status, handleDie]); // 依賴項包括 status 和 handleDie



    if (status === "running") {
        return null;
    } else {
        const { playSound } = useAudio();
        playSound("die");
    }




    return (
        <div id="result-container">
            <div id="result">
                <h1>Game Over</h1>
                <p>Your score: {score}</p>
                <button onClick={reset}>Retry</button>
            </div>
        </div>
    )


}