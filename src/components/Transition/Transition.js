import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { enemyStats, enemyStats2, chronosStats, transitionText, enemyStats3, playerStats } from '../../shared/stats';

export const Transition = ({
    playerVidaAtual,
    enemyVidaAtual,
    setPlayerVidaAtual,
    setEnemyVidaAtual,
    respawn,
    setRespawn,
    setCooldown,
    setCuraCooldown,
    setCuraCounter,
    setShowCuraCounter,
    chronos,
    setChronosCooldown,
    setChronosCounter,
    setBlockButton 
}) => {
    var background = document.getElementById('transitionBackground')
    var paragrafo1 = document.getElementById('paragrafo1')
    var paragrafo2 = document.getElementById('paragrafo2')
    var paragrafo3 = document.getElementById('paragrafo3')
    var paragrafo4 = document.getElementById('paragrafo4')
    var skipButton = document.getElementById('skipButton')
    var info = document.getElementById('infoUpgrades')
    const [transitionP1, setTransitionP1] = useState(transitionText.t11)
    const [transitionP2, setTransitionP2] = useState(transitionText.t12)
    const [transitionP3, setTransitionP3] = useState(transitionText.t13)
    const [transitionP4, setTransitionP4] = useState(transitionText.t14)
    const [skipDisabled, setSkipDisabled] = useState('')

    useEffect(() => {
        if (respawn) {
            paragrafo1.style.opacity = 0
            paragrafo2.style.opacity = 0
            paragrafo3.style.opacity = 0
            paragrafo4.style.opacity = 0
            info.style.opacity = 0

            background.style.display = 'flex'
            setTimeout(() => { background.style.opacity = 1 }, 100);

            setTimeout(() => {
                setRespawn(false)
                setCooldown('')
                setCuraCooldown('')
                setCuraCounter(0)
                setShowCuraCounter('‎')
                setChronosCooldown('')
                setBlockButton('')
                setPlayerVidaAtual(playerStats.vidaTotal)

                if (chronos === 'areia') {
                    setChronosCounter(chronosStats.areiaChronosInicial)
                }
                if (chronos === 'marca') {
                    setChronosCounter(chronosStats.marcaChronosInicial)
                }
                if (chronos === 'escudo') {
                    setChronosCounter(chronosStats.escudoChronosInicial)
                }

                if (enemyStats.alive) setEnemyVidaAtual(enemyStats.vidaTotal)
                if (!enemyStats.alive && enemyStats2.alive) setEnemyVidaAtual(enemyStats2.vidaTotal)
                if (!enemyStats.alive && !enemyStats2.alive) setEnemyVidaAtual(enemyStats3.vidaTotal)
            }, 1600);

            setTimeout(() => {
                background.style.opacity = 0
                setTimeout(() => { background.style.display = 'none' }, 1600);
            }, 2500);
        }

        if (enemyVidaAtual <= 0 && enemyStats3.alive) {
            setCooldown('disabled')
            setCuraCooldown('disabled')
            setChronosCooldown('disabled')
            setBlockButton('disabled')
            paragrafo1.style.opacity = 0
            paragrafo2.style.opacity = 0
            paragrafo3.style.opacity = 0
            paragrafo4.style.opacity = 0
            info.style.opacity = 0

            setTimeout(() => {
                background.style.display = 'flex'
                setTimeout(() => { background.style.opacity = 1 }, 100);

                setTimeout(() => { paragrafo1.style.opacity = 1 }, 2500);
                
                setTimeout(() => { paragrafo2.style.opacity = 1 }, 4500);

                setTimeout(() => {
                    skipButton.style.display = 'flex'
                    setTimeout(() => { skipButton.style.opacity = 1 }, 10);
                }, 5100);

                setTimeout(() => { paragrafo3.style.opacity = 1 }, 6500);

                setTimeout(() => { paragrafo4.style.opacity = 1 }, 8500);

                if (enemyStats2.alive) setTimeout(() => { info.style.opacity = 1 }, 8600);
            }, 2000);
        }
    })

    const closeTransition = () => {
        setSkipDisabled('disabled')
        setCooldown('')
        setCuraCooldown('')
        setCuraCounter(0)
        setShowCuraCounter('‎')
        setChronosCooldown('')
        setBlockButton('')

        setTimeout(() => {
            if (!enemyStats.alive && enemyStats2.alive) {
                setTransitionP1(transitionText.t21)
                setTransitionP2(transitionText.t22)
                setTransitionP3(transitionText.t23)
                setTransitionP4(transitionText.t24)
            }
    
            if (!enemyStats.alive && !enemyStats2.alive && enemyStats3.alive) {
                setTransitionP1(transitionText.t31)
                setTransitionP2(transitionText.t32)
                setTransitionP3(transitionText.t33)
                setTransitionP4(transitionText.t34)
            }

            setSkipDisabled('')
        }, 2100);

        if (chronos === 'areia') {
            setChronosCounter(chronosStats.areiaChronosInicial)
        }
        if (chronos === 'marca') {
            setChronosCounter(chronosStats.marcaChronosInicial)
        }
        if (chronos === 'escudo') {
            setChronosCounter(chronosStats.escudoChronosInicial)
        }

        if (!enemyStats3.alive) {
            skipButton.style.opacity = 0
            setTimeout(() => { paragrafo4.style.opacity = 0 }, 500);
            setTimeout(() => { paragrafo3.style.opacity = 0 }, 1000);
            setTimeout(() => { paragrafo2.style.opacity = 0 }, 1500);
            setTimeout(() => { skipButton.style.display = 'none' }, 1500); 
        } else {
            skipButton.style.opacity = 0
            background.style.opacity = 0
            setTimeout(() => { background.style.display = 'none' }, 1500); 
            setTimeout(() => { skipButton.style.display = 'none' }, 1500); 
        }
    }

    return (
        <div className={styles.background} id='transitionBackground'>
            <p className={styles.text} style={{opacity: 0}} id='paragrafo1'>{transitionP1}</p>
            <p className={styles.text} style={{opacity: 0}} id='paragrafo2'>{transitionP2}</p>
            <p className={styles.text} style={{opacity: 0}} id='paragrafo3'>{transitionP3}</p>
            <p className={styles.text} style={{opacity: 0}} id='paragrafo4'>{transitionP4}</p>
            <div className={styles.buttonDiv}>
                <div id='infoUpgrades' className={styles.infoUpgradesDiv} style={{ opacity: 0 }}>
                    <p className={styles.infoUpgradeText}>+Vida</p>
                    <p className={styles.infoUpgradeText}>+Chronos</p>
                </div>
                <button
                    style={{display: 'none', opacity: 0}}
                    className={styles.skipButton}
                    onClick={ closeTransition }
                    disabled={skipDisabled}
                    id='skipButton'>Continuar -→</button>
            </div>
        </div>
    )
}