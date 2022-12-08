import React from "react";
import styles from "./styles.module.css";

export const Ending = ({ setModo }) => {
    const initialMenu = () => {
        setModo('Inicial')
    }

    const tryAgain = () => {
        setModo('Battle')
    }

    return (
        <div className={styles.mainContainerEnding}>
            <div>
                <button onClick={initialMenu}>Menu Inicial</button>
                <button onClick={tryAgain}>Tentar Novamente</button>
            </div>
        </div>
    )
}