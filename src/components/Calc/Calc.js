import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Mapa } from "../";
import { Morte } from "../";
import { Intro } from "../";
import { Creditos } from "../";
import { Tutorial } from "../";
import { Transition } from "../";
import { Inventario } from "../";
import { Skillcheck } from "../";
import { Personagens } from "../";
import { BarraProgresso } from "../";
import { BiMinus } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa"
import { 
  GiTimeTrap,
  GiSandstorm,
  GiExtraTime,
  GiHeavyTimer,
  GiSandsOfTime,
  GiShardSword,
  GiHealthPotion, 
  } from "react-icons/gi";
import { RiDeleteBack2Line, RiTreasureMapLine, RiTreasureMapFill, RiLockFill } from "react-icons/ri";
import { CgSandClock } from "react-icons/cg" 
import '../../assets/fonts/ThisSucksRegular-Y9yo.ttf';
import { chronosStats, enemyStats, enemyStats2 } from "../../shared/stats";

export const Calc = ({
  blockButton,
  setBlockButton,
  chronos,
  setChronos,
  chronosAtivo,
  setChronosAtivo,
  chronosTotal,
  setChronosTotal,
  chronosCounter,
  setChronosCounter,
  chronosCooldown,
  setChronosCooldown,
  curaCooldown,
  setCuraCooldown,
  curaCounter,
  setCuraCounter,
  cooldown,
  setCooldown,
  turnoEnemy,
  setTurnoEnemy,
  indicador,
  setEnemyVidaAtual,
  enemyVidaAtual,
  setPlayerVidaAtual,
  playerVidaAtual,
  setCharEnemyMorto,
  charEnemyMorto }) => {
  const [resposta, setResposta] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [operacao, setOperacao] = useState('');
  const [callSkillcheck, setCallSkillcheck] = useState(false)
  const [skillcheckDone, setSkillcheckDone] = useState(true)
  const [showResultado, setShowResultado] = useState('');
  const [n1, setN1] = useState(parseInt(Math.floor(Math.random() * 10)));
  const [n2, setN2] = useState(parseInt(Math.floor(Math.random() * 10)));
  const [dano, setDano] = useState(0)
  const [enemyDano, setEnemyDano] = useState(0)
  const [enemyCrit, setEnemyCrit] = useState(0)
  const [cura, setCura] = useState(0)
  const [crit, setCrit] = useState(false)
  const [marcaCrit, setMarcaCrit] = useState(false)
  const [click, setClick] = useState(false)
  const [showCuraCounter, setShowCuraCounter] = useState('‎')
  const [travarConfirmar, setTravarConfirmar] = useState('disabled')
  const [acertou, setAcertou] = useState(false)
  const [errou, setErrou] = useState(false)
  const [secondErrou, setSecondErrou] = useState(false)
  const [curou, setCurou] = useState(false)
  const [desviou, setDesviou] = useState(false)
  const [enemyDesviou, setEnemyDesviou] = useState(false)
  const [QTE, setQTE] = useState('disabled')
  const [acertouQTE, setAcertouQTE] = useState(false)
  const [hitTiming, setHitTiming] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [background, setBackground] = useState(1)
  const [respawn, setRespawn] = useState(false)
  const [callCreditos, setCallCreditos] = useState(false)

  const refResultado = useRef(showResultado)
  refResultado.current = showResultado

  const refTiming = useRef(hitTiming)
  refTiming.current = hitTiming

  const refAcertou = useRef(acertouQTE)
  refAcertou.current = acertouQTE

  const refMarcaCrit = useRef(marcaCrit)
  refMarcaCrit.current = marcaCrit

  const refPlayerVidaAtual = useRef(playerVidaAtual)
  refPlayerVidaAtual.current = playerVidaAtual

  var trueResultado;

  const criarDigitos = () => {
    const digitos = [];
    const j = 0

    for (let i = 1; i < 11; i++) {
      if (i === 10) {
        digitos.push(
          <button
            id='calcButton' 
            className={styles.buttonPad}
            disabled={travarConfirmar}
            onClick={updateResposta}
            value={j}>{j}</button>
        );
      } else {
        digitos.push(
          <button 
            id='calcButton'
            className={styles.buttonPad}
            disabled={travarConfirmar}
            onClick={updateResposta}
            value={i}>{i}</button>
        );
      };
    };
    return digitos;
  }

  const criarChronosIcon = () => {
    const opcao = []

    switch (chronos) {
      case 'areia':
        opcao.push(<GiSandsOfTime className={styles.chronoIcon}/>)
        break;

      case 'marca':
        opcao.push(<GiHeavyTimer className={styles.chronoIcon}/>)
        break;

      case 'escudo':
        opcao.push(<GiTimeTrap className={styles.chronoIcon}/>)
        break;
    }
    return opcao
  }

  getComputedStyle(document.documentElement).getPropertyValue('--opacidade');
  getComputedStyle(document.documentElement).getPropertyValue('--rotarChevron');
  getComputedStyle(document.documentElement).getPropertyValue('--subirInventario');
  getComputedStyle(document.documentElement).getPropertyValue('--subirMapa');
  getComputedStyle(document.documentElement).getPropertyValue('--rotarMapa');
  getComputedStyle(document.documentElement).getPropertyValue('--mapBack');
  getComputedStyle(document.documentElement).getPropertyValue('--chevronBack');
  
  const [opacidade, setOpacidade] = useState(document.documentElement.style.setProperty('--opacidade', '0'))
  const [showing, setShowing] = useState(false)
  const [mapaShowing, setMapaShowing] = useState(false)
  const [leftArrow, setLeftArrow] = useState(false)
  const [rightArrow, setRightArrow] = useState(false)

  const updateResposta = e => {
    if (resposta == '-' && e.target.value == 0) return setResposta(0)
    setResposta(resposta + e.target.value);
  }

  const tutorialClick = () => setModalOpen(true)

  const chevronClick = () => {
    if (!showing) {
      document.documentElement.style.setProperty('--rotarChevron', 'rotate(0deg)')
      document.documentElement.style.setProperty('--subirInventario', 'translateY(-100%)')
      document.documentElement.style.setProperty('--chevronBack', 'rgba(101, 101, 101, 0.461)')
      document.documentElement.style.setProperty('--mapBack', 'rgba(0, 0, 0, 0.461)')
      document.documentElement.style.setProperty('--subirMapa', 'translateY(0%)')
      setTimeout(() => {
        document.documentElement.style.setProperty('--rotarMapa', 'rotate(0deg)')
      }, 1);
      setMapaShowing(false)
      setShowing(true)
    } else {
      document.documentElement.style.setProperty('--rotarChevron', 'rotate(180deg)')
      document.documentElement.style.setProperty('--subirInventario', 'translateY(0%)')
      document.documentElement.style.setProperty('--chevronBack', 'rgba(0, 0, 0, 0.461)')

      setShowing(false)

      document.getElementById('conditionDiv').style.opacity = '0'
      setTimeout(() => {
          setOpacidade(document.documentElement.style.setProperty('--display', 'none'))
      }, 350);
    }
  }

  var tipDiv = document.getElementById('tipDiv')

  const closeTipDiv = () => {
    tipDiv.style.opacity = 0
    setTimeout(() => { tipDiv.style.display = 'none' }, 400);
  }

  const mapaClick = () => {
    if (!mapaShowing) {
      document.documentElement.style.setProperty('--subirMapa', 'translateY(-100%)')
      document.documentElement.style.setProperty('--chevronBack', 'rgba(0, 0, 0, 0.461)')
      document.documentElement.style.setProperty('--mapBack', 'rgba(101, 101, 101, 0.461)')
      document.documentElement.style.setProperty('--subirInventario', 'translateY(0%)')
      document.documentElement.style.setProperty('--rotarChevron', 'rotate(180deg)')

      document.getElementById('conditionDiv').style.opacity = '0'
      setTimeout(() => {
          setOpacidade(document.documentElement.style.setProperty('--display', 'none'))
      }, 350);
      setTimeout(() => {
        document.documentElement.style.setProperty('--rotarMapa', 'rotate(-22deg)')
      }, 1);
      setShowing(false)
      setMapaShowing(true)
    } else {
      document.documentElement.style.setProperty('--subirMapa', 'translateY(0%)')
      document.documentElement.style.setProperty('--mapBack', 'rgba(0, 0, 0, 0.461)')
      setTimeout(() => {
        document.documentElement.style.setProperty('--rotarMapa', 'rotate(0deg)')
      }, 1);
      setMapaShowing(false)
    }
  }

  const apagarResposta = () => {
    setResposta('');
  }
  const adicionarMenos = () => {
    if (resposta === '') return setResposta('-');
  }

  onkeydown = e => {
    if (e.key === 'a' && cooldown === '') return atacar();
    if (e.key === 'c' && curaCooldown === '') return curar();
    if (e.key === 'Shift' && chronosCooldown === '') return atacarChronos();
    if (e.key === ' ' && QTE !== 'disabled') return setHitTiming(true);
    if (e.key === 'i') return chevronClick();
    if (e.key === 'm') return mapaClick();
    if (e.key === 'Escape' || e.key === 't' && modalOpen) return setModalOpen(false);
    if (e.key === 't') return tutorialClick();
    if (e.key === 'ArrowLeft' && modalOpen) return setLeftArrow(true);
    if (e.key === 'ArrowRight' && modalOpen) return setRightArrow(true);
    if (e.key === 'ArrowUp' && modalOpen) return document.getElementById('textSpace').scrollBy({ top: -100, behavior: 'smooth' });
    if (e.key === 'ArrowDown' && modalOpen) return document.getElementById('textSpace').scrollBy({ top: 100, behavior: 'smooth' });

    if (travarConfirmar === 'disabled') return;
    if (e.key === '-' && resposta === '') return setResposta('-');
    if (e.key === 'Backspace') return setResposta('');
    if (e.key === 'Enter') return acerto();

    if (isNaN(e.key) || e.key === ' ') return;
    setResposta(resposta + e.key);
  }
  
  useEffect(() => {
    setClick(false)
    setAcertou(false)
    setErrou(false)
    setSecondErrou(false)
    setCurou(false)
    setCrit(false)
    setCallSkillcheck(false)
    setEnemyDesviou(false)

    getComputedStyle(document.documentElement).getPropertyValue('--borderChronos');
    if (chronosCounter === 0) document.documentElement.style.setProperty('--borderChronos', '2px solid #45dec4')
    else document.documentElement.style.setProperty('--borderChronos', 'none')
    
    if (chronosAtivo && chronos === 'marca') setMarcaCrit(true)
    if (turnoEnemy && enemyVidaAtual !== 0) {
      setCallSkillcheck(true)
      startEnemyAttack()
    }
    if (turnoEnemy && enemyVidaAtual === 0) {
      setCooldown('')
      setCuraCooldown('')
      setCuraCounter(0)
      setBlockButton('')
    }
    setTurnoEnemy(false)
    if (chronosCounter !== 0) setChronosCooldown('disabled')
    if (operacao === 'soma') setPergunta(`${n1} + ${n2}`)
    if (operacao === 'subtracao') setPergunta(`${n1} – ${n2}`)
    if (operacao === 'multip') setPergunta(`${n1} x ${n2}`)
  });

  useEffect(() => {
    if (click) {
      if (curaCounter > 0) setCuraCounter(curaCounter - 1)
      if (showCuraCounter > 1) setShowCuraCounter(showCuraCounter - 1)
      if (showCuraCounter == 1) setShowCuraCounter('‎')
      
      getComputedStyle(document.documentElement).getPropertyValue('--abrir-pergunta');
      getComputedStyle(document.documentElement).getPropertyValue('--diminuir-square');
      
      setTimeout(() => {
        if (refResultado.current != 'certo' && refResultado.current != 'errado') {
          setShowResultado('errou')
          setErrou(true)
          if (!enemyStats.alive && !enemyStats2.alive) {
            setTimeout(() => { setSecondErrou(true) }, 1000);
          }
          setEnemyDano(Math.floor(Math.random() * 11) + 10)

          if (enemyWillCrit) {
            setEnemyDano((Math.floor(Math.random() * (11)) + 10) * enemyCritDmg)
            setEnemyCrit(true)
          }

          if (chronos === 'marca') setChronosCooldown('disabled')
          if (refMarcaCrit.current && chronos === 'marca') {
            setMarcaCrit(false)
            setChronosAtivo(false)
          }

          setTimeout(() => {
            if (refPlayerVidaAtual.current > 0) setTurnoEnemy(true)
          }, 2000);
        }
      }, 5000);
    }
  });

  var curaRandomizer = Math.floor(Math.random() * 6) + 10

  const startEnemyAttack = () => {
    setQTE('')
    setEnemyDano(Math.floor(Math.random() * 11) + 10)
    if (enemyWillCrit) {
      setEnemyDano((Math.floor(Math.random() * (11)) + 10) * enemyCritDmg)
      setEnemyCrit(true)
    }

    setTimeout(() => {
      if (refTiming.current) {
        setErrou(true)
        if (!enemyStats.alive && !enemyStats2.alive) {
          setTimeout(() => { setSecondErrou(true) }, 1000);
        }
        setHitTiming(false)
        setAcertouQTE(true)
      }
    }, 1650);

    setTimeout(() => {
      if (refTiming.current) {
        setDesviou(true)
        setHitTiming(false)
        setAcertouQTE(true)
      }
    }, 1850);

    setTimeout(() => {
      if (!refAcertou.current) {
        setErrou(true)
        if (!enemyStats.alive && !enemyStats2.alive) {
          setTimeout(() => { setSecondErrou(true) }, 1000);
        }
      }
      
      if (refTiming.current) {
        setErrou(true)
        if (!enemyStats.alive && !enemyStats2.alive) {
          setTimeout(() => { setSecondErrou(true) }, 1000);
        }
        setHitTiming(false)
      }

      setAcertouQTE(false)
      setQTE('disabled')
    }, 2500);
  }

  const curar = () => {
    setCura(curaRandomizer)
    setCuraCounter(4)
    setShowCuraCounter(4)
    setCurou(true)
    setCooldown('disabled')
    setCuraCooldown('disabled')
    setChronosCooldown('disabled')
    setBlockButton('disabled')

    setTimeout(() => {
      setTurnoEnemy(true)
    }, 1000);
  }

  const atacarChronos = () => {
    setChronosAtivo(true)
    setChronosCooldown('disabled')

    if (chronos === 'areia') {
      setChronosTotal(chronosStats.areiaChronosTotal)
      setChronosCounter(chronosStats.areiaChronosTotal)
    }
    if (chronos === 'marca') {
      setChronosTotal(chronosStats.marcaChronosTotal)
      setChronosCounter(chronosStats.marcaChronosTotal)
    }
    if (chronos === 'escudo') {
      setChronosTotal(chronosStats.escudoChronosTotal)
      setChronosCounter(chronosStats.escudoChronosTotal)
    }
  }

  const atacar = () => {
    console.log(Math.floor(Math.random() * 10) + 1)
    setClick(true)
    setTravarConfirmar('')
    setShowResultado('')
    setCooldown('disabled')
    setCuraCooldown('disabled')
    if (chronos === 'marca') setChronosCooldown('')
    else setChronosCooldown('disabled')
    setBlockButton('disabled')

    document.documentElement.style.setProperty('--abrir-pergunta', '0.6rem')
    document.documentElement.style.setProperty('--diminuir-square', '0rem')

    let verificador = Math.floor(Math.random() * 3);
    switch (verificador) {
      case 0:
        setOperacao('soma')
        break;
      case 1:
        setOperacao('subtracao')
        break;
      case 2:
        setOperacao('multip')
        break;
    }
    setN1(parseInt(Math.floor(Math.random() * 10)) + 4)
    setN2(parseInt(Math.floor(Math.random() * 10)) + 4)

    setTimeout(() => {
      setTravarConfirmar('disabled')
      setResposta('')
      
      document.documentElement.style.setProperty('--abrir-pergunta', '-8rem')
      document.documentElement.style.setProperty('--diminuir-square', '8rem')
    }, 5000);
  }

  var critDmg = 1.5;

  var chanceBase = 1
  var willCrit = Math.floor(Math.random() * 10) + 1 <= chanceBase;

  var enemyCritDmg = 2
  var enemyChanceBase = 1
  var enemyWillCrit = Math.floor(Math.random() * 10) + 1 <= enemyChanceBase

  var enemyDesviouBase = 3
  var enemyDesviouCheck = Math.floor(Math.random() * 10) + 1 <= enemyDesviouBase
  
  const acerto = () => {
    setTravarConfirmar('disabled')
    if (chronos === 'marca') setChronosCooldown('disabled')

    switch (operacao) {
      case 'soma':
        trueResultado = n1 + n2
        break;
      case 'subtracao':
        trueResultado = n1 - n2
        break;
      case 'multip':
        trueResultado = n1 * n2
        break;
    }

    setEnemyDano(Math.floor(Math.random() * 11) + 10)
    if (enemyWillCrit) {
      setEnemyDano((Math.floor(Math.random() * (11)) + 10) * enemyCritDmg)
      setEnemyCrit(true)
    }

    if (trueResultado <= 50) setDano(50)
    if (trueResultado > 50) setDano(Math.abs(trueResultado))

    if (willCrit) {
      if (trueResultado <= 50) setDano(50 * critDmg)
      if (trueResultado > 50) setDano(Math.floor(Math.abs(trueResultado) * critDmg))
      setCrit(true)
    }
    if (marcaCrit) {
      if (trueResultado <= 50) setDano(50 * 2)
      if (trueResultado > 50) setDano(Math.floor(Math.abs(trueResultado) * 2))
      setCrit(true)
      setChronosAtivo(false)
    }
    
    if (resposta == trueResultado) { 
      setShowResultado('certo')
      if (enemyDesviouCheck && !enemyStats.alive && enemyStats2.alive) setEnemyDesviou(true)
      else setAcertou(true);
      setResposta('');
      trueResultado = 0
      if (chronosCounter > 0 && chronos === 'areia') setChronosCounter(chronosCounter - 1)
      if (chronosCounter > 0 && chronos === 'marca' && !marcaCrit) setChronosCounter(chronosCounter - 1)
      if (chronosCounter > 0 && chronosAtivo === false && chronos === 'escudo') setChronosCounter(chronosCounter - 1)
      setMarcaCrit(false)

      setTimeout(() => {
        if (refPlayerVidaAtual.current > 0) setTurnoEnemy(true)
        if (chronosAtivo && chronos === 'marca') setChronosAtivo(false)
      }, 1000);
    } else {
      setShowResultado('errado');
      setErrou(true);
      if (!enemyStats.alive && !enemyStats2.alive) {
        setTimeout(() => { setSecondErrou(true) }, 1000);
      }
      setResposta('');
      setMarcaCrit(false)
      trueResultado = 0

      setTimeout(() => {
        if (refPlayerVidaAtual.current > 0) setTurnoEnemy(true)
      }, 2000);
    }
  }

  return (
    <div className={styles.mainContainer}>

      <Intro/>

      <Transition
        setCallCreditos={setCallCreditos}
        playerVidaAtual={playerVidaAtual}
        enemyVidaAtual={enemyVidaAtual}
        setPlayerVidaAtual={setPlayerVidaAtual}
        setEnemyVidaAtual={setEnemyVidaAtual}
        respawn={respawn}
        setRespawn={setRespawn}
        setCooldown={setCooldown}
        setCuraCooldown={setCuraCooldown}
        setCuraCounter={setCuraCounter}
        setShowCuraCounter={setShowCuraCounter}
        chronos={chronos}
        setChronosCooldown={setChronosCooldown}
        setChronosCounter={setChronosCounter}
        setBlockButton={setBlockButton}
      />

      <Tutorial 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen}
        leftArrow={leftArrow}
        setLeftArrow={setLeftArrow}
        rightArrow={rightArrow}
        setRightArrow={setRightArrow}
      />

      <Morte
        playerVidaAtual={playerVidaAtual}
        respawn={respawn}
        setRespawn={setRespawn}
        setCooldown={setCooldown}
        setCuraCooldown={setCuraCooldown}
        setChronosCooldown={setChronosCooldown}
        setBlockButton={setBlockButton}
      />

      <div className={styles.containerCalc}>
        <div className={styles.subContainerCalc}>
          <div className={styles.perguntaDiv}>
            <div className={styles.square}/>

            <h3 className={styles.perguntaCalc}>{pergunta}</h3>

            <div className={styles.square}/>
          </div>

          <div className={styles.respostaDiv}>
            <input
              className={styles.inputCalc}
              placeholder="RESPOSTA..."
              // type={'number'}
              onChange={updateResposta}
              value={resposta}
              disabled>
            </input>
          </div>

          <div className={styles.buttonGrid}>
            { criarDigitos() }
            <button
              id='calcButton'
              className={styles.buttonApagar}
              disabled={travarConfirmar}
              onClick={apagarResposta}>
                <RiDeleteBack2Line className={styles.deleteIcon}/>
            </button>
            <button
              id='calcButton'
              className={styles.buttonMenos}
              disabled={travarConfirmar}
              onClick={adicionarMenos}>
                <BiMinus className={styles.deleteIcon}/>
            </button>
          </div>

          <div className={styles.divButtonConfirmar}>
            <button
              className={styles.buttonConfirmar}
              disabled={travarConfirmar}
              onClick={() => acerto()}>
              ATACAR 
            </button>
          </div>

          <div className={styles.resultadoDivCalc}>
            <h3 className={styles.resultadoCalc}>{refResultado.current}</h3>
          </div>
        </div>
      </div>

      <BarraProgresso click={click}/>
      <Skillcheck 
        setCallSkillcheck={setCallSkillcheck}
        callSkillcheck={callSkillcheck}
        hitTiming={hitTiming}
        enemyVidaAtual={enemyVidaAtual}/>

      <div
      className={styles.containerRpg} 
      style={{backgroundImage: `url(/img/background${background}.png)`}}>

        <div className={styles.characterSpace}>
          <Personagens
            setBackground={setBackground}
            setCrit={setCrit}
            desviou={desviou}
            setDesviou={setDesviou}
            enemyDesviou={enemyDesviou}
            chronos={chronos}
            chronosTotal={chronosTotal}
            setCharEnemyMorto={setCharEnemyMorto}
            charEnemyMorto={charEnemyMorto}
            setEnemyVidaAtual={setEnemyVidaAtual}
            enemyVidaAtual={enemyVidaAtual}
            setPlayerVidaAtual={setPlayerVidaAtual}
            playerVidaAtual={playerVidaAtual}
            callSkillcheck={callSkillcheck}
            setCallSkillcheck={setCallSkillcheck}
            chronosAtivo={chronosAtivo}
            setChronosAtivo={setChronosAtivo}
            chronosCounter={chronosCounter}
            dano={dano}
            enemyDano={enemyDano}
            enemyCrit={enemyCrit}
            setEnemyCrit={setEnemyCrit}
            cura={cura}
            crit={crit}
            curou={curou}
            acertou={acertou}
            errou={errou}
            secondErrou={secondErrou}
            indicador={indicador}/>
        </div>

        <div className={styles.buttonTutorialDiv} onClick={ tutorialClick }>
          <FaHandsHelping className={styles.buttonTutorial}/>
        </div>

        <div className={styles.chevronDiv} onClick={ chevronClick } id='chevronId'>
          <CgSandClock className={styles.chevronIcon}/>
        </div>

        <div className={styles.mapDiv} onClick={ mapaClick } id='mapId'>
          {mapaShowing ? <RiTreasureMapFill className={styles.mapIcon}/> : <RiTreasureMapLine className={styles.mapIcon}/>}
        </div>

        <div className={styles.conditionDiv} id='conditionDiv'>
          <p>Chronos podem ser trocados quando:</p>
          <p>- Sua barra de energia estiver zerada.</p>
          <p>- Chronos não estiverem ativos em você.</p>
        </div>

        <div className={styles.tipDiv} id='tipDiv'>
          <p style={{paddingRight: '.5rem'}}>Todo o progresso será perdido ao recarregar a página. É possível terminar o jogo sem recarregá-la.</p>
          <button className={styles.tipDivButton} onClick={ closeTipDiv }>X</button>
        </div>

        <div style={{display: ''}} className={styles.buttonSpace}>

          <div className={styles.buttonDivCalc}>
            <div className={styles.buttonDivCalc2}>
              <button 
                className={styles.buttonCalcAtk}
                disabled={cooldown}
                onClick={atacar}>
                  <p className={styles.buttonCalcText}>PREPARAR</p>
                  <GiShardSword className={styles.atkIcon}/>
                  <p></p>
              </button>
            </div>

            <div className={styles.buttonDivCalc2}>
              <button 
                className={styles.buttonCalcUlt}
                disabled={chronosCooldown}
                onClick={atacarChronos}>
                  <p className={styles.buttonCalcText}>CHRONOS</p>
                  { criarChronosIcon() }
                  <p></p>
              </button>
            </div>

            <div className={styles.buttonDivCalc2}>
              <button 
                className={styles.buttonCalcCurar}
                disabled={curaCooldown}
                onClick={() => curar()}>
                  <p className={styles.buttonCalcText}>CURAR</p>
                  <GiHealthPotion className={styles.healIcon}/>
                  <p className={styles.showCuraCounter}>{showCuraCounter}</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sideMapa}>
        <Mapa/>
      </div>
      <div className={styles.sideInventario}>
        <Inventario
          chronosCooldown={chronosCooldown}
          showing={showing}
          setOpacidade={setOpacidade}
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

      <Creditos callCreditos={callCreditos}/>
    </div>
  );
}