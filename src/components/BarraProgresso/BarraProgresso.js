import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const BarraProgresso = ({ click }) => {
    const [countdown, setCountdown] = useState(0)
    const [transitionBarra, setTransitionBarra] = useState(5)
    const [transitionVermelho, setTransitionVermelho] = useState(0.5)
    const [danger, setDanger] = useState('f4f4f4')

    useEffect(() => {
        if (click) {
            setCountdown(100)

            setTimeout(() => {
                setTransitionBarra(0)
            }, 5000);
            setTimeout(() => {
                setDanger('FF0000')
            }, 3000);
        }
        if (transitionBarra == 0) {
            setCountdown(0)
            setTimeout(() => {
                setTransitionBarra(5)
            }, 100);
            setTransitionVermelho(0.5)
            setDanger('f4f4f4')
        }
    })

    return (
        <div 
            className={styles.barra}
            style={{
                'transition': `${transitionVermelho}s linear`,
                'background-color': `#${danger}`
            }}>
            <div 
                className={styles.tempo} 
                style={{
                    'height': `${countdown}%`,
                    'transition': `${transitionBarra}s linear`,
                }}>‎</div>
        </div>
    )
}