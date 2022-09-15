import { React, useEffect, useState } from "react";
import styles from "./styles.module.css";

export const BarraVida = ({ vidaTotal, vidaAtual }) => {
  return (
    <div className={styles.healthBox}>
      <div className={styles.healthText}>
        <span>{vidaAtual} / {vidaTotal}</span>
      </div>
      <div className={styles.barra}>
        <div className={styles.hit}>‎</div>
      </div>
    </div>
  );
};