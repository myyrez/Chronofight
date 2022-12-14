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
    const [chronosAtivo, setChronosAtivo] = useState(false)
    const [chronosCooldown, setChronosCooldown] = useState('')
    const [chronosCounter, setChronosCounter] = useState(3)
    const [chronosBar, setChronosBar] = useState()

    const [chronos, setChronos] = useState('areia')
    // areia: ataque com a forma física volátil do próprio tempo. finos feixes de areia que
    // parecem ter vida própria envolvem o inimigo. -- passivamente queima o inimigo por 2 rodadas
    

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
                if (chronosCounter === 0) setChronosCooldown('')
            }, 4500);
        } 
    })

    return (
        <div className={styles.mainContainer}>
            <Calc
                chronos={chronos}
                setChronos={setChronos}
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