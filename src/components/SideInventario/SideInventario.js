import React from "react";
import { Inventario } from "../Inventario";
import styles from './styles.module.css'

export const SideInventario = ({ chronos }) => {
    return (
        <div className={styles.sideBody}>
            <Inventario
                chronos={chronos}/>
        </div>
    )
}