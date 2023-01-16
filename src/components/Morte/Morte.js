import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { playerStats } from '../../shared/stats';

export const Morte = ({
    playerVidaAtual,
    respawn,
    setRespawn,
    setCooldown,
    setCuraCooldown,
    setChronosCooldown,
    setBlockButton, }) => {
    const [respawnButtonBlock, setRespawnButtonBlock] = useState('')
    var morteFundo = document.getElementById('morteFundo')
    var tryAgain = document.getElementById('tryAgain')

    useEffect(() => {
        if (playerVidaAtual <= 0 && !respawn) {
            setCooldown('disabled')
            setCuraCooldown('disabled')
            setChronosCooldown('disabled')
            setBlockButton('disabled')
            tryAgain.style.display = 'none'
            tryAgain.style.opacity = 0

            setTimeout(() => {
                morteFundo.style.display = 'flex'
                setTimeout(() => { morteFundo.style.opacity = 1 }, 100);
            }, 1500);
            
            setTimeout(() => {
                tryAgain.style.display = 'flex'
                setTimeout(() => { tryAgain.style.opacity = 1 }, 100);
            }, 3500);
        }
    })

    const respawnButton = () => {
        setRespawn(true)
        tryAgain.style.display = 'none'
        tryAgain.style.opacity = 0

        morteFundo.style.opacity = 0
        setTimeout(() => {
            morteFundo.style.display = 'none'
        }, 1000);
    }

    return (
        <div className={styles.morteFundo} id='morteFundo'>
            <div className={styles.morteBanner}>
                <h1 className={styles.youDied}>Você Morreu</h1>
                <button
                    id='tryAgain'
                    className={styles.tryAgain}
                    onClick={ respawnButton }
                    disabled={ respawnButtonBlock }>Tentar Novamente</button>
            </div>
        </div>
    )
}