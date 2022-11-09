import React from "react";
import { Inventario } from "../Inventario";
import styles from './styles.module.css'

export const SideInventario = () => {
    return (
        <div className={styles.sideBody}>
            <Inventario/>
        </div>
    )
}