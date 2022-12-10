import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Calc } from "../Calc";
import { enemyStats, playerStats } from "../../shared/stats";

export const Battle = ({ setModo, setCharEnemyMorto, charEnemyMorto }) => {
    const [turnoEnemy, setTurnoEnemy] = useState(false)
    const [indicador, setIndicador] = useState('char')
    const [cooldown, setCooldown] = useState('')
    const [curaCooldown, setCuraCooldown] = useState('')
    const [curaCounter, setCuraCounter] = useState(0)
    const [playerVidaAtual, setPlayerVidaAtual] = useState(playerStats.vidaTotal)
    const [enemyVidaAtual, setEnemyVidaAtual] = useState(enemyStats.vidaTotal)
    

    useEffect(() => {
        if (turnoEnemy && enemyVidaAtual !== 0) {
            setIndicador('enem')
            setCooldown('disabled')
            setCuraCooldown('disabled')

            setTimeout(() => {
                setIndicador('char')
                setCooldown('')
                if (curaCounter <= 0) setCuraCooldown('') 
            }, 4500);
        } 
    })

    return (
        <div className={styles.mainContainer}>
            <Calc
                charEnemyMorto={charEnemyMorto}
                setCharEnemyMorto={setCharEnemyMorto}
                setPlayerVidaAtual={setPlayerVidaAtual}
                playerVidaAtual={playerVidaAtual}
                setEnemyVidaAtual={setEnemyVidaAtual}
                enemyVidaAtual={enemyVidaAtual}
                setModo={setModo}
                cooldown={cooldown}
                setCooldown={setCooldown}
                curaCooldown={curaCooldown}
                setCuraCooldown={setCuraCooldown}
                curaCounter={curaCounter}
                setCuraCounter={setCuraCounter}
                indicador={indicador}
                turnoEnemy={turnoEnemy}
                setTurnoEnemy={setTurnoEnemy}
                />
        </div>
    )
}