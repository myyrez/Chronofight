import React, { useEffect, useState } from "react";
import healSmoke from "../../assets/image/curaImg.png";
import { enemyStats, playerStats, chronosStats } from "../../shared/stats";
import { BarraVida } from "../";
import { 
  GiTimeTrap,
  GiSandstorm,
  GiExtraTime,
  GiHeavyTimer,
  GiSandsOfTime,
  GiShardSword,
  GiHealthPotion, 
  } from "react-icons/gi";
import styles from "./styles.module.css";

export const Personagens = ({
  setCrit,
  setEnemyCrit,
  desviou,
  setDesviou,
  chronos,
  chronosTotal,
  setModo,
  indicador,
  callSkillcheck,
  chronosAtivo,
  setChronosAtivo,
  chronosCounter,
  dano,
  enemyDano,
  cura,
  crit,
  enemyCrit,
  curou,
  acertou,
  errou,
  playerVidaAtual,
  setPlayerVidaAtual,
  enemyVidaAtual,
  setEnemyVidaAtual,
  setCharEnemyMorto, }) => {
  
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
  const [desativarAreia, setDesativarAreia] = useState(0)
  const [areiaCounter, setAreiaCounter] = useState(3)
  const [DOT, setDOT] = useState(false)
  var healImg = document.getElementById("healId");
  getComputedStyle(document.documentElement).getPropertyValue('--playerChronos')
  getComputedStyle(document.documentElement).getPropertyValue('--areia')

  useEffect(() => {
    if (chronosAtivo && chronos === 'areia') {
      setDOT(true)
      setChronosAtivo(false)
      document.getElementById('enem').style.filter = 'sepia(60%)'
    }

    if (chronosAtivo && chronos === 'marca') 
    document.getElementById('player').style.filter = 'brightness(1.5)'

    if (!chronosAtivo && chronos === 'marca') 
    document.getElementById('player').style.filter = 'brightness(1)'

    if (chronosAtivo && chronos === 'escudo') 
    document.getElementById('player').style.filter = 'grayscale(60%)'

    if (acertou) {
      document.getElementById('enemyDmg').style.color = '#fff'
      setEnemyVidaAtual(enemyVidaAtual - dano)

      document.getElementById('enemyDmg').hidden = false
      document.getElementById('enemyDmg').animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, 20px)' },
      ], { duration: 3000 })
      document.getElementById('enem').animate(hit, { duration: 750 })

      document.getElementById('player').animate([
        { transform: 'translate(0px)' },
        { transform: 'translate(70px)' },
        { transform: 'translate(0px)' },
      ], { duration: 350 })
      
      setTimeout(() => {
        document.getElementById('enemyDmg').hidden = true
      }, 1500);
    }


    if (desviou) {
      document.getElementById('playerDmg').textContent = 'desviou'
      document.getElementById('playerCrit').textContent = ''
      document.getElementById('playerDmg').hidden = false

      document.getElementById('player').animate(dodge, { duration: 750 })
      document.getElementById('enem').animate([
        { transform: 'translate(0px)' },
        { transform: 'translate(-70px)' },
        { transform: 'translate(0px)' },
      ], { duration: 350 })

      setTimeout(() => {
        document.getElementById('playerDmg').hidden = true
        document.getElementById('enemyDmg').hidden = true
      }, 1500);

      setDesviou(false)
    }

    
    if (errou) {
      document.getElementById('playerDmg').textContent = Math.floor(enemyDano)
      document.getElementById('enemyDmg').textContent = Math.floor(dano)
      document.getElementById('enemyCrit').textContent = 'crit!'
      document.getElementById('playerCrit').textContent = 'crit!'
      let newEnemyDano = Math.floor(enemyDano / 2)

      if (chronosAtivo && chronos === 'escudo') {
        if ((playerVidaAtual - newEnemyDano) < 1) setPlayerVidaAtual(1)
        else setPlayerVidaAtual(playerVidaAtual - newEnemyDano)
        setEnemyVidaAtual(enemyVidaAtual - newEnemyDano)
        document.getElementById('playerDmg').textContent = Math.floor(newEnemyDano)
        document.getElementById('enemyDmg').textContent = Math.floor(newEnemyDano)
        if (enemyCrit) {
          document.getElementById('playerCrit').hidden = false
          document.getElementById('enemyCrit').hidden = false
        }

        document.getElementById('playerDmg').hidden = false
        document.getElementById('enemyDmg').hidden = false
        if (playerVidaAtual < 1) setPlayerVidaAtual(1)
        
        document.getElementById('player').style.filter = 'grayscale(0%)'
        setChronosAtivo(false)
      } else {
        setPlayerVidaAtual(playerVidaAtual - enemyDano)
        document.getElementById('playerDmg').hidden = false
      }

      document.getElementById('playerDmg').animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, 20px)' },
      ], { duration: 3000 })

      document.getElementById('player').animate(hit, { duration: 750 })

      document.getElementById('enem').animate([
        { transform: 'translate(0px)' },
        { transform: 'translate(-70px)' },
        { transform: 'translate(0px)' },
      ], { duration: 350 })

      setTimeout(() => {
        document.getElementById('playerDmg').hidden = true
        document.getElementById('enemyDmg').hidden = true
        document.getElementById('playerCrit').hidden = true
        document.getElementById('enemyCrit').hidden = true

      }, 1500);
    }


    if (curou) {
      setPlayerVidaAtual(playerVidaAtual + cura)
      healImg.hidden = false
      document.getElementById('playerCura').hidden = false

      document.getElementById('playerCura').animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, 20px)' },
      ], { duration: 3000 })

      healImg.animate([
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 },
      ], { duration: 2000 })

      healImg.animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, -50px)' },
      ], { duration: 2000 })

      setTimeout(() => {
        healImg.hidden = true
        document.getElementById('playerCura').hidden = true
      }, 2000);
    }


    if (acertou && crit) {
      document.getElementById('enemyCrit').hidden = false

      document.getElementById('enemyCrit').animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, 20px)' },
      ], { duration: 3000 })

      setTimeout(() => {
        document.getElementById('enemyCrit').hidden = true
      }, 1500);

      setCrit(false)
    }


    if (errou && enemyCrit) {
      document.getElementById('playerCrit').hidden = false

      document.getElementById('playerCrit').animate([
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(0px, 20px)' },
      ], { duration: 3000 })

      setTimeout(() => {
        document.getElementById('playerCrit').hidden = true
      }, 1500);

      setEnemyCrit(false)
    }


    if (playerVidaAtual > playerStats.vidaTotal) setPlayerVidaAtual(playerStats.vidaTotal)
    if (playerVidaAtual <= 0) {
      setTimeout(() => {
        setModo('Ending')
        setCharEnemyMorto('char')
      }, 2000);
    }
    if (enemyVidaAtual <= 0) {
      setTimeout(() => {
        setModo('Ending')
        setCharEnemyMorto('enemy')
      }, 2000);
    }
  })


  if (callSkillcheck) {
    document.getElementById('enem').animate(prepare, { duration: 750 })

    setTimeout(() => {
      if (DOT && desativarAreia < 3) {
        setEnemyVidaAtual(enemyVidaAtual - chronosStats.areiaDano)
        document.getElementById('chronosDmg').hidden = false

        document.getElementById('chronosDmg').animate([
          { transform: 'translate(0px, 0px)' },
          { transform: 'translate(0px, 20px)' },
        ], { duration: 3000 })
        document.getElementById('enem').animate(hit, { duration: 750 })

        setTimeout(() => {
          document.getElementById('chronosDmg').hidden = true
        }, 1500);

        setAreiaCounter(areiaCounter - 1)
        setDesativarAreia(desativarAreia + 1)
      }
      if (desativarAreia === 3) {
        setChronosAtivo(false)
        setDOT(false)
        setAreiaCounter(3)
        setDesativarAreia(0)
      }
      if (areiaCounter === 1) document.getElementById('enem').style.filter = 'sepia(0%)'
    }, 3500);
  }


  const indicadorEnem = () => {
    if (indicador === 'enem') return { display: 'flex' }
    else return { display: 'none' }
  }
  const indicadorChar = () => {
    if (indicador === 'char') return { display: 'flex' }
    else return { display: 'none' }
  }
  
  const indicadorBordaChar = () => {
    if (indicador === 'char') return { border: '1px solid white', borderRadius: '5px' }
  }
  const indicadorBordaEnem = () => {
    if (indicador === 'enem') return { border: '1px solid white', borderRadius: '5px' }
  }
  
  return (
    <div className={styles.divPersonagens}>

      <div className={styles.player}>
        
        {chronosAtivo && chronos === 'marca' ? [
          <GiHeavyTimer className={styles.chronosHealthIcon}/>
        ] : ''}

        {chronosAtivo && chronos === 'escudo' ? [
          <GiTimeTrap className={styles.chronosHealthIcon}/>
        ] : ''}

        
        <div className={styles.indicador} style={indicadorChar()}/>
        <div style={indicadorBordaChar()}>
          <BarraVida
            chronos={chronos}
            chronosAtivo={chronosAtivo}
            vidaAtual={playerVidaAtual}
            setVidaAtual={setPlayerVidaAtual}
            vidaTotal={playerStats.vidaTotal}
            chronosCounter={chronosCounter}
            chronosTotal={chronosTotal}
          />
        </div>
        <h1 id="playerCura" hidden className={styles.showCura}>+{cura}</h1>
        <h1 id="playerDmg" hidden className={styles.showDanoRight}>{Math.floor(enemyDano)}</h1>
        <h1 id="playerCrit" hidden className={styles.showCritRight}>crit!</h1>
        <img
          id="player"
          src={playerStats.src}
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

      {DOT && areiaCounter !== 0 ? [
          <div className={styles.chronosHealthIconEnem}>
            <p className={styles.chronosHealthTextEnem}>{areiaCounter}</p>
            <GiSandsOfTime className={styles.chronosHealthTextEnem}/>
          </div>
        ] : ''}

        <div className={styles.indicador} style={indicadorEnem()} />
        <div style={indicadorBordaEnem()}>
          <BarraVida
            vidaAtual={enemyVidaAtual}
            setVidaAtual={setEnemyVidaAtual}
            vidaTotal={enemyStats.vidaTotal}
            chronosCounter={1}
            chronosTotal={1}
          />
        </div>
        <h1 id="enemyDmg" hidden className={styles.showDanoLeft}>{dano}</h1>
        <h1 id="chronosDmg" hidden className={styles.showAreiaDanoLeft}>{chronosStats.areiaDano}</h1>
        <h1 id="enemyCrit" hidden className={styles.showCritLeft}>crit!</h1>
        <img
          id="enem"
          src={enemyStats.src} 
          width={enemyStats.spriteWidth}
          height={enemyStats.spriteHeight}
        />
      </div>
      
    </div>
  );
};
