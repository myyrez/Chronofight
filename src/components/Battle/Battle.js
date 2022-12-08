import React, { useEffect, useState } from "react";
import { Calc } from "../Calc";
import styles from "./styles.module.css";

export const Battle = ({ setModo }) => {
    const [turnoEnemy, setTurnoEnemy] = useState(false)
    const [indicador, setIndicador] = useState('char')
    const [cooldown, setCooldown] = useState('')
    const [curaCooldown, setCuraCooldown] = useState('')
    const [curaCounter, setCuraCounter] = useState(0)

    useEffect(() => {
        if (turnoEnemy) {
            setIndicador('enem')
            setCooldown('disabled')
            setCuraCooldown('disabled')

            setTimeout(() => {
                setIndicador('char')
                setCooldown('')
                if (curaCounter <= 2) curaCooldown('') 
            }, 4500);
        } 
    })

    return (
        <div className={styles.mainContainer}>
            <Calc
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