import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const BarraProgresso = ({ click }) => {
    const [countdown, setCountdown] = useState(0)

    useEffect(() => {
        if (click) {
            setCountdown(100)
        }
    })

    return (
        <div className={styles.barra}>
            <div className={styles.tempo}  style={{'height': `${countdown}%`}}>‎</div>
        </div>
    )
}