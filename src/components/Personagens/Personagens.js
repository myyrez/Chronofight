import React, { useEffect, useState } from "react";
import char from "../../assets/image/char3.png";
import enem from "../../assets/image/enem2.png";
import healSmoke from "../../assets/image/curaImg.png";
import { enemyStats, playerStats } from "../../shared/stats";
import { BarraVida } from "../";
import styles from "./styles.module.css";

export const Personagens = ({ dano, cura, curou, acertou, errou }) => {
  const [playerVidaAtual, setPlayerVidaAtual] = useState(playerStats.vidaTotal)
  const [enemyVidaAtual, setEnemyVidaAtual] = useState(enemyStats.vidaTotal)
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
  var healImg = document.getElementById("healId")

  useEffect(() => {
    if (acertou) {
      document.getElementById('enemyDmg').hidden = false
      document.getElementById('enemyCrit').hidden = false
      setEnemyVidaAtual(parseInt(enemyVidaAtual) - parseInt(dano))
      document.getElementById('enem').animate(hit, { duration: 750 })
      document.getElementById('player').animate([
        { transform: 'translate(0px)'},
        { transform: 'translate(70px)'},
        { transform: 'translate(0px)'},
      ], { duration: 350})
      
      setTimeout(() => {
        document.getElementById('enemyDmg').hidden = true
        document.getElementById('enemyCrit').hidden = true
      }, 3000);
    }
    if (errou) {
      setPlayerVidaAtual(parseInt(playerVidaAtual) - parseInt(dano))
      document.getElementById('player').animate(hit, { duration: 750 })
      document.getElementById('enem').animate([
        { transform: 'translate(0px)'},
        { transform: 'translate(-70px)'},
        { transform: 'translate(0px)'},
      ], { duration: 350 })
    }
    if (curou) {
      setPlayerVidaAtual(parseInt(playerVidaAtual) + parseInt(cura))
      healImg.hidden = false
      healImg.animate([
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 },
      ], { duration: 2000 })
      healImg.animate([
        { transform: 'translate(0px, 0px)'},
        { transform: 'translate(0px, -150px)'},
      ], { duration: 2000 })
      setTimeout(() => {
        healImg.hidden = true
      }, 2000);
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
        <h1 id="playerDmg" hidden className={styles.showDanoRight}>{dano}</h1>
        <h1 id="playerCrit" hidden className={styles.showCritRight}>crit!</h1>
        <img
          id="player"
          src={char} 
          width='300px' 
          height='300px'
        />
      </div>
      
      <img
        hidden
        className={styles.healStyle}
        id="healId"
        src={healSmoke}
        width='200px'
        height='200px'
      />

      <div className={styles.enem}>
        <BarraVida
          vidaAtual={enemyVidaAtual}
          setVidaAtual={setEnemyVidaAtual}
          vidaTotal={enemyStats.vidaTotal}
          dano={dano}
          acertou={acertou}
        />
        <h1 id="enemyDmg" hidden className={styles.showDanoLeft}>{dano}</h1>
        <h1 id="enemyCrit" hidden className={styles.showCritLeft}>crit!</h1>
        <img
          id="enem"
          src={enem} 
          width='220px' 
          height='250px'
        />
      </div>
      

    </div>
  );
};
