import React, { useEffect, useState } from "react";
import char from "../../assets/image/char3.png";
import enem from "../../assets/image/enem2.png";
import { enemyStats, playerStats } from "../../shared/stats";
import { BarraVida } from "../";
import styles from "./styles.module.css";

export const Personagens = ({ dano, cura, curou, acertou, errou }) => {
  const [playerVidaAtual, setPlayerVidaAtual] = useState(playerStats.vidaTotal)
  const [enemyVidaAtual, setEnemyVidaAtual] = useState(parseInt(enemyStats.vidaTotal))
  const hit = [
    { transform: 'translate(0px, 0px) rotate(0deg)' },
    { transform: 'translate(5px, 6px) rotate(1deg)' },
    { transform: 'translate(-5px, -8px) rotate(-2deg)' },
    { backgroundColor: '#fff'},
    { transform: 'translate(-8px, 5px) rotate(2deg)' },
    { transform: 'translate(8px, 8px) rotate(1deg)' },
    { transform: 'translate(5px, -5px) rotate(2deg)' },
    { transform: 'translate(-5px, 8px) rotate(-2deg)' },
    { transform: 'translate(-6px, 5px) rotate(1deg)' },
    { transform: 'translate(8px, 5px) rotate(-2deg)' },
    { transform: 'translate(5px, -5px) rotate(2deg)' },
    { transform: 'translate(0px, 0px) rotate(0deg)' },
  ]

  useEffect(() => {
    if (acertou) {
      setEnemyVidaAtual(parseInt(enemyVidaAtual) - parseInt(dano))
      document.getElementById('enem').animate(hit, { duration: 750 })
      document.getElementById('player').animate([
        { transform: 'translate(0px)'},
        { transform: 'translate(70px)'},
        { transform: 'translate(0px)'},
      ], { duration: 350})
    }
    if (errou) {
      setPlayerVidaAtual(parseInt(playerVidaAtual) - parseInt(dano))
      document.getElementById('player').animate(hit, { duration: 750 })
      document.getElementById('enem').animate([
        { transform: 'translate(0px)'},
        { transform: 'translate(-70px)'},
        { transform: 'translate(0px)'},
      ], { duration: 350})
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
          setVidaAtual={setPlayerVidaAtual}
          vidaTotal={playerStats.vidaTotal}
          cura={cura}
          errou={errou}
        />
        <img
          id="player"
          src={char} 
          width='300px' 
          height='300px'
        />
      </div>


      <div className={styles.enem}>
        <BarraVida
          vidaAtual={enemyVidaAtual}
          setVidaAtual={setEnemyVidaAtual}
          vidaTotal={enemyStats.vidaTotal}
          dano={dano}
          acertou={acertou}
        />
        <img
          id="enem"
          src={enem} 
          width='220' 
          height='250'
        />
      </div>

    </div>
  );
};
