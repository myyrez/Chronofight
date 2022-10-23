import { React, useEffect, useState } from "react";
import styles from "./styles.module.css";

export const BarraVida = ({ vidaTotal, vidaAtual, setVidaAtual}) => {
  const [bar, setBar] = useState((vidaAtual / vidaTotal) * 100)
  const [hit, setHit] = useState((vidaAtual / vidaTotal) * 100)

  useEffect(() => {
    setBar((vidaAtual / vidaTotal) * 100)
    setHit((vidaAtual / vidaTotal) * 100)
    if (vidaAtual < 0) {
      setBar(0)
      setHit(0)
      setVidaAtual(0)
    }
  })

  return (
    <div className={styles.healthBox}>
      <div className={styles.healthText}>
        <span>{vidaAtual} / {vidaTotal}</span>
      </div>
      <div className={styles.barra}>
        <div className={styles.total} style={{'width': `${(vidaTotal / vidaTotal) * 100}%`}}>
          <div className={styles.hit} style={{'width': `${bar}%`}}>‎</div>
          <div className={styles.bar} style={{'width': `${hit}%`}}>‎</div>
        </div>
      </div>
    </div>
  );
};