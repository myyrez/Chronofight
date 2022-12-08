import React, { useEffect, useState } from "react";
import char from "../../assets/image/char3.png";
import enem from "../../assets/image/enem2.png";
import healSmoke from "../../assets/image/curaImg.png";
import dangerSign from "../../assets/image/dangerImg.png"
import { enemyStats, playerStats } from "../../shared/stats";
import { BarraVida } from "../";
import styles from "./styles.module.css";

export const Personagens = ({ indicador, callSkillcheck, dano, enemyDano, cura, crit, enemyCrit, curou, acertou, errou }) => {
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

  const prepare = [
    { transform: 'translate(-5px)' },
    { transform: 'translate(5px)' },
    { transform: 'translate(-5px)' },
    { transform: 'translate(5px)' },
    { transform: 'translate(-5px)' },
    { transform: 'translate(5px)' },
    { transform: 'translate(0px)' },
  ]

  const dodge = [
    { transform: 'translate(0px)'},
    { transform: 'translate(-75px)'},
    { transform: 'translate(-75px)'},
    { transform: 'translate(-75px)'},
    { transform: 'translate(-75px)'},
    { transform: 'translate(-75px)'},
    { transform: 'translate(0px)'},
  ]
  var healImg = document.getElementById("healId");

  useEffect(() => {

    if (acertou) {
      setEnemyVidaAtual(parseInt(enemyVidaAtual) - parseInt(dano))
      document.getElementById('enemyDmg').hidden = false

      document.getElementById('enemyDmg').animate([
        { transform: 'translate(0px, 0px)'},
        { transform: 'translate(0px, 20px)'},
      ], { duration: 3000 })
      document.getElementById('enem').animate(hit, { duration: 750 })

      document.getElementById('player').animate([
        { transform: 'translate(0px)'},
        { transform: 'translate(70px)'},
        { transform: 'translate(0px)'},
      ], { duration: 350 })
      
      setTimeout(() => {
        document.getElementById('enemyDmg').hidden = true
      }, 1500);
    }


    if (errou) {
      setPlayerVidaAtual(parseInt(playerVidaAtual) - parseInt(enemyDano))
      document.getElementById('playerDmg').hidden = false

      document.getElementById('playerDmg').animate([
        { transform: 'translate(0px, 0px)'},
        { transform: 'translate(0px, 20px)'},
      ], { duration: 3000 })

      if (enemyDano === 0) {
        document.getElementById('player').animate(dodge, { duration: 750 })
      } else {
        document.getElementById('player').animate(hit, { duration: 750 })
      }

      document.getElementById('enem').animate([
        { transform: 'translate(0px)'},
        { transform: 'translate(-70px)'},
        { transform: 'translate(0px)'},
      ], { duration: 350 })

      setTimeout(() => {
        document.getElementById('playerDmg').hidden = true
      }, 1500);
    }


    if (curou) {
      setPlayerVidaAtual(parseInt(playerVidaAtual) + parseInt(cura))
      healImg.hidden = false
      document.getElementById('playerCura').hidden = false

      document.getElementById('playerCura').animate([
        { transform: 'translate(0px, 0px)'},
        { transform: 'translate(0px, 20px)'},
      ], { duration: 3000 })

      healImg.animate([
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 },
      ], { duration: 2000 })

      healImg.animate([
        { transform: 'translate(0px, 0px)'},
        { transform: 'translate(0px, -50px)'},
      ], { duration: 2000 })

      setTimeout(() => {
        healImg.hidden = true
        document.getElementById('playerCura').hidden = true
      }, 2000);
    }


    if (acertou && crit) {
      document.getElementById('enemyCrit').hidden = false

      document.getElementById('enemyCrit').animate([
        { transform: 'translate(0px, 0px)'},
        { transform: 'translate(0px, 20px)'},
      ], { duration: 3000 })

      setTimeout(() => {
        document.getElementById('enemyCrit').hidden = true
      }, 1500);
    }

    if (errou && enemyCrit) {
      document.getElementById('playerCrit').hidden = false

      document.getElementById('playerCrit').animate([
        { transform: 'translate(0px, 0px)'},
        { transform: 'translate(0px, 20px)'},
      ], { duration: 3000 })

      setTimeout(() => {
        document.getElementById('playerCrit').hidden = true
      }, 1500);
    }

    if (playerVidaAtual > 50) setPlayerVidaAtual(parseInt(50))
  })

  const indicadorEnem = () => {
    if (indicador === 'enem') return {display: 'flex'}
    else return {display: 'none'}
  }

  const indicadorChar = () => {
    if (indicador === 'char') return {display: 'flex'}
    else return {display: 'none'}
  }

  

  if (callSkillcheck) {
    document.getElementById('dangerImg').animate(prepare, { duration: 750 })
    document.getElementById('enem').animate(prepare, { duration: 750 })
    document.getElementById('dangerImg').style.display = 'flex'
    setTimeout(() => {
      document.getElementById('dangerImg').style.display = 'none'
    }, 2500);
  }

  const indicadorBordaChar = () => {
    if (indicador === 'char') return {border: '1px solid white', borderRadius: '5px'}
  }
  const indicadorBordaEnem = () => {
    if (indicador === 'enem') return {border: '1px solid white', borderRadius: '5px'}
  }
  
  return (
    <div className={styles.divPersonagens}>

      <div className={styles.player}>
        <div className={styles.indicador} style={indicadorChar()}/>
        <div style={indicadorBordaChar()}>
          <BarraVida
            indicador={indicador}
            vidaAtual={playerVidaAtual}
            setVidaAtual={setPlayerVidaAtual}
            vidaTotal={playerStats.vidaTotal}
          />
        </div>
        <h1 id="playerCura" hidden className={styles.showCura}>+{cura}</h1>
        <h1 id="playerDmg" hidden className={styles.showDanoRight}>{(enemyDano === 0 ? 'desvio' : Math.floor(enemyDano))}</h1>
        <h1 id="playerCrit" hidden className={styles.showCritRight}>crit!</h1>
        <img
          id="player"
          src={char} 
          width={playerStats.spriteWidth}
          height={playerStats.spriteHeight}
        />
      </div>
      
      <img
        hidden
        className={styles.healStyle}
        id="healId"
        src={healSmoke}
        width='220px'
        height='220px'
      />

      <div className={styles.enem}>
        <div className={styles.indicador} style={indicadorEnem()} />
        <div style={indicadorBordaEnem()}>
          <BarraVida
            indicador={indicador}
            vidaAtual={enemyVidaAtual}
            setVidaAtual={setEnemyVidaAtual}
            vidaTotal={enemyStats.vidaTotal}
          />
        </div>
        <img
          id="dangerImg" 
          src={dangerSign} 
          className={styles.showDanger}
          height='100px'
          width='100px'/>
        <h1 id="enemyDmg" hidden className={styles.showDanoLeft}>{dano}</h1>
        <h1 id="enemyCrit" hidden className={styles.showCritLeft}>crit!</h1>
        <img
          id="enem"
          src={enem} 
          width={enemyStats.spriteWidth}
          height={enemyStats.spriteHeight}
        />
      </div>
      

    </div>
  );
};
