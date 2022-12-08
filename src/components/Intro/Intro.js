import React from "react";
import styles from "./styles.module.css";

export const Intro = ({ setModo }) => {
    const start = () => {
        setModo('Battle')
    }

    return (
        <div className={styles.mainContainerIntro}>
            <div>
                <button onClick={start}>vamos</button>
            </div>
        </div>
    )
}