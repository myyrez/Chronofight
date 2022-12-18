import React from "react";
import { Inventario } from "../Inventario";
import styles from './styles.module.css'

export const SideInventario = ({
    cooldown,
    blockButton,
    setBlockButton,
    chronos,
    setChronos,
    chronosCounter,
    setChronosCounter,
    chronosTotal,
    setChronosTotal,
    chronosAtivo,
}) => {
    return (
        <div className={styles.sideBody}>
            <Inventario
                cooldown={cooldown}
                blockButton={blockButton}
                setBlockButton={setBlockButton}
                chronos={chronos}
                setChronos={setChronos}
                chronosCounter={chronosCounter}
                setChronosCounter={setChronosCounter}
                chronosTotal={chronosTotal}
                setChronosTotal={setChronosTotal}
                chronosAtivo={chronosAtivo}/>
        </div>
    )
}