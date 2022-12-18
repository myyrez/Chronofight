import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Calc } from "../Calc";
import { enemyStats, playerStats, chronosStats } from "../../shared/stats";

export const Battle = ({ setModo, setCharEnemyMorto, charEnemyMorto }) => {
    const [turnoEnemy, setTurnoEnemy] = useState(false)
    const [indicador, setIndicador] = useState('char')
    const [cooldown, setCooldown] = useState('')
    const [curaCooldown, setCuraCooldown] = useState('')
    const [curaCounter, setCuraCounter] = useState(0)
    const [playerVidaAtual, setPlayerVidaAtual] = useState(playerStats.vidaTotal)
    const [enemyVidaAtual, setEnemyVidaAtual] = useState(enemyStats.vidaTotal)
    const [chronosAtivo, setChronosAtivo] = useState(false)
    const [chronosCooldown, setChronosCooldown] = useState('')
    const [chronosCounter, setChronosCounter] = useState(chronosStats.areiaChronosInicial)
    const [chronosTotal, setChronosTotal] = useState(chronosStats.areiaChronosInicial)

    const [chronos, setChronos] = useState('areia')

    useEffect(() => {
        if (turnoEnemy && enemyVidaAtual !== 0) {
            setIndicador('enem')
            setCooldown('disabled')
            setCuraCooldown('disabled')
            setChronosCooldown('disabled')
            
            setTimeout(() => {
                setIndicador('char')
                setCooldown('')
                if (curaCounter === 0) setCuraCooldown('') 
                if (chronosCounter === 0 && chronos !== 'marca') setChronosCooldown('')
            }, 4500);
        } 
    })

    return (
        <div className={styles.mainContainer}>
            <Calc
                chronos={chronos}
                setChronos={setChronos}
                chronosTotal={chronosTotal}
                setChronosTotal={setChronosTotal}
                chronosAtivo={chronosAtivo}
                setChronosAtivo={setChronosAtivo}
                chronosCounter={chronosCounter}
                setChronosCounter={setChronosCounter}
                chronosCooldown={chronosCooldown}
                setChronosCooldown={setChronosCooldown}
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