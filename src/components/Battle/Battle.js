import React, { useEffect, useState } from "react";
import { Calc } from "../Calc";
import styles from "./styles.module.css";

export const Battle = () => {
    const [turnoEnemy, setTurnoEnemy] = useState(false)
    const [indicador, setIndicador] = useState('char')
    const [cooldown, setCooldown] = useState('')

    useEffect(() => {
        if (turnoEnemy) {
            setIndicador('enem')
            setCooldown('disabled')
        } 
        setTimeout(() => {
            setIndicador('char')
            setCooldown('')
        }, 4500);
    })

    return (
        <div className={styles.mainContainer}>
            <Calc
                cooldown={cooldown}
                setCooldown={setCooldown}
                indicador={indicador}
                turnoEnemy={turnoEnemy}
                setTurnoEnemy={setTurnoEnemy}
                />
        </div>
    )
}