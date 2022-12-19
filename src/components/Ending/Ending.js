import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const Ending = ({ setModo, setCharEnemyMorto, charEnemyMorto }) => {
    const [status, setStatus] = useState('')

    const initialMenu = () => {
        setModo('Intro')
    }

    const tryAgain = () => {
        setModo('Battle')
    }

    useEffect(() => {
        if (charEnemyMorto === 'char') {
            setStatus('Você morreu')
        }
        if (charEnemyMorto === 'enemy') {
            setStatus('Você venceu')
        }
    })

    return (
        <div className={styles.mainContainerEnding}>
            <div className={styles.centerContainer}>
                <label>{status}</label>
                <button 
                    className={styles.buttonEnding}
                    onClick={initialMenu}>Menu Inicial
                    </button>
                <button
                    className={styles.buttonEnding} 
                    onClick={tryAgain}>Tentar Novamente
                    </button>
            </div>
        </div>
    )
}