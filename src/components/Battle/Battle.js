import React, { useEffect, useState } from "react";
import { Calc } from "../Calc";
import styles from "./styles.module.css";

export const Battle = () => {
    const [turnoEnemy, setTurnoEnemy] = useState(false)

    if (turnoEnemy) {
        
    }

    return (
        <Calc
            turnoEnemy={turnoEnemy}
            setTurnoEnemy={setTurnoEnemy}/>
    )
}