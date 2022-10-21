import React, { useEffect, useState } from "react";
import char3 from "../../assets/image/char3.png";
import enem2 from "../../assets/image/enem2.png";
import { enemyStats, playerStats } from "../../shared/stats";
import { BarraVida } from "../";
import styles from "./styles.module.css";

export const Personagens = ({ dano, cura, curou, acertou, errou }) => {
  const [playerVidaAtual, setPlayerVidaAtual] = useState(playerStats.vidaTotal)
  const [enemyVidaAtual, setEnemyVidaAtual] = useState(parseInt(enemyStats.vidaTotal))
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (acertou) {
      setEnemyVidaAtual(parseInt(enemyVidaAtual) - parseInt(dano))
    }
    if (errou) {
      setPlayerVidaAtual(parseInt(playerVidaAtual) - parseInt(dano))
    }
    if (curou) {
      setPlayerVidaAtual(parseInt(playerVidaAtual) + parseInt(cura))
    }
    if (playerVidaAtual > 50) setPlayerVidaAtual(parseInt(50))
  })

  return (
    <div className={styles.divPersonagens}>

      <div className={styles.player}>
        <BarraVida 
          vidaAtual={playerVidaAtual}
          vidaTotal={playerStats.vidaTotal}
          // dano={dano}
          cura={cura}
          // acertou={acertou}
          errou={errou}
        />
        <img
          src={char3} 
          width='350' 
          height='300'
        />
      </div>


      <div className={styles.enem}>
        <BarraVida
          vidaAtual={enemyVidaAtual}
          vidaTotal={enemyStats.vidaTotal}
          dano={dano}
          acertou={acertou}
        />
        <img
          src={enem2} 
          width='220' 
          height='250'
        />
      </div>

    </div>
  );
};
