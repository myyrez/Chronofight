import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Skillcheck } from "../";
import { Personagens } from "../";
import { BarraProgresso } from "../";
import { SideInventario } from "../";
import { BiMinus } from "react-icons/bi";
import { GiExtraTime, GiShardSword } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";
import { RiDeleteBack2Line } from "react-icons/ri";
import '../../assets/fonts/ThisSucksRegular-Y9yo.ttf';

export const Calc = ({
  chronos,
  setChronos,
  chronosAtivo,
  setChronosAtivo,
  chronosCounter,
  setChronosCounter,
  chronosCooldown,
  setChronosCooldown,
  setModo,
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
  const [click, setClick] = useState(false)
  const [showCuraCounter, setShowCuraCounter] = useState('‎')
  const [travarConfirmar, setTravarConfirmar] = useState('disabled')
  const [acertou, setAcertou] = useState(false)
  const [errou, setErrou] = useState(false)
  const [curou, setCurou] = useState(false)
  const [QTE, setQTE] = useState('disabled')
  const [acertouQTE, setAcertouQTE] = useState(false)
  const [hitTiming, setHitTiming] = useState(false) 
  const refResultado = useRef(showResultado)
  refResultado.current = showResultado
  const refTiming = useRef(hitTiming)
  refTiming.current = hitTiming
  const refAcertou = useRef(acertouQTE)
  refAcertou.current = acertouQTE
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

  const updateResposta = e => {
    if (resposta == '-' && e.target.value == 0) return setResposta(0)
    setResposta(resposta + e.target.value);
  }

  const apagarResposta = () => {
    setResposta('');
  }
  const adicionarMenos = () => {
    if (resposta === '') return setResposta('-');
  }

  onkeydown = e => {
    if (e.key === 'a') return atacar();
    if (e.key === 'c') return curar();
    if (e.key === ' ' && QTE !== 'disabled') return setHitTiming(true)

    if (travarConfirmar === 'disabled') return;
    if (e.key === '-' && resposta === '') return setResposta('-');
    if (e.key === 'Backspace') return setResposta('');
    if (e.key === 'Enter') return acerto();

    if (isNaN(e.key)) return;
    setResposta(resposta + e.key);
  }
  
  useEffect(() => {
    setClick(false)
    setAcertou(false)
    setErrou(false)
    setCurou(false)
    setCrit(false)
    setCallSkillcheck(false)
    if (turnoEnemy) {
      setTurnoEnemy(false)
      setCallSkillcheck(true)
      startEnemyAttack()
    }
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
          setEnemyDano(Math.floor(Math.random() * 11) + 10)
          if (enemyWillCrit) {
            setEnemyDano((Math.floor(Math.random() * (11)) + 10) * enemyCritDmg)
            setEnemyCrit(true)
          }

          setTimeout(() => {
            setTurnoEnemy(true)
          }, 2000);
        }
      }, 5000);
    }
  });

  var curaRandomizer = Math.floor(Math.random() * 6) + 10

  const startEnemyAttack = () => {
    setQTE('')
    setEnemyDano(10)

    setTimeout(() => {
      if (refTiming.current) {
        setErrou(true)
        setHitTiming(false)
        setAcertouQTE(true)
      }
    }, 1650);

    setTimeout(() => {
      if (refTiming.current) {
        setEnemyDano(0)
        setErrou(true)
        setHitTiming(false)
        setAcertouQTE(true)
      }
    }, 1850);

    setTimeout(() => {
      if (refAcertou.current === false) setErrou(true)
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

    setTimeout(() => {
      setTurnoEnemy(true)
    }, 1000);
  }

  const atacarChronos = () => {
    if (chronos === 'areia') {
      setChronosAtivo(true)
      setChronosCounter(4)
      setChronosCooldown('disabled')
    }
  }

  const atacar = () => {
    setClick(true)
    setTravarConfirmar('')
    setShowResultado('')
    setCooldown('disabled')
    setCuraCooldown('disabled')
    setChronosCooldown('disabled')
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

  var critDecider = Math.floor(Math.random() * 2);
  var critDmg = 1.5;
  if (critDecider === 0) critDmg = 2;

  var chanceMais10 = true;
  var chanceMais20 = true;
  var chanceBase = 0.1
  if (chanceMais10) chanceBase += 0.1
  if (chanceMais20) chanceBase += 0.2
  var willCrit = Math.random() < chanceBase;

  var enemyCritDmg = 2
  var enemyChanceMais10 = false;
  var enemyChanceMais20 = false;
  var enemyChanceBase = 0.1
  var enemyWillCrit = Math.random() < enemyChanceBase

  
  const acerto = () => {
    setTravarConfirmar('disabled')

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

    if (trueResultado <= 10) setDano(10)
    if (trueResultado > 10) setDano(Math.abs(trueResultado))

    if (willCrit) {
      if (trueResultado <= 10) setDano(10 * critDmg)
      if (trueResultado > 10) setDano(Math.floor(Math.abs(trueResultado) * critDmg))
      setCrit(true)
    }
    
    if (resposta == trueResultado) { 
      setShowResultado('certo')
      setAcertou(true);
      setResposta('');
      trueResultado = 0

      setTimeout(() => {
        setTurnoEnemy(true)
      }, 1000);
    } else {
      setShowResultado('errado');
      setErrou(true);
      setResposta('');
      trueResultado = 0

      setTimeout(() => {
        setTurnoEnemy(true)
      }, 2000);
    }
  }

  return (
    <div className={styles.mainContainer}>
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
              CONFIRMAR 
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
        chronosAtivo={chronosAtivo}
        hitTiming={hitTiming}
        setHitTiming={setHitTiming}/>

      <div className={styles.containerRpg}>
        <div className={styles.characterSpace}>
          <Personagens
            turnoEnemy={turnoEnemy}
            setCharEnemyMorto={setCharEnemyMorto}
            charEnemyMorto={charEnemyMorto}
            setEnemyVidaAtual={setEnemyVidaAtual}
            enemyVidaAtual={enemyVidaAtual}
            setPlayerVidaAtual={setPlayerVidaAtual}
            playerVidaAtual={playerVidaAtual}
            setModo={setModo}
            callSkillcheck={callSkillcheck}
            setCallSkillcheck={setCallSkillcheck}
            chronosAtivo={chronosAtivo}
            setChronosAtivo={setChronosAtivo}
            chronosCounter={chronosCounter}
            setChronosCounter={setChronosCounter}
            chronosCooldown={chronosCooldown}
            setChronosCooldown={setChronosCooldown}
            dano={dano}
            enemyDano={enemyDano}
            enemyCrit={enemyCrit}
            cura={cura}
            crit={crit}
            curou={curou}
            acertou={acertou}
            errou={errou}
            indicador={indicador}/>
        </div>

        <div style={{display: ''}} className={styles.buttonSpace}>

          <div className={styles.buttonDivCalc}>
            <div className={styles.buttonDivCalc2}>
              <button 
                className={styles.buttonCalcAtk}
                disabled={cooldown}
                onClick={atacar}>
                  <p className={styles.buttonCalcText}>ATACAR</p>
                  <GiShardSword className={styles.atkIcon}/>
                  <p></p>
              </button>
            </div>

            <div className={styles.buttonDivCalc2}>
              <button 
                className={styles.buttonCalcUlt}
                disabled={chronosCooldown}
                onClick={atacarChronos}>
                  <p className={styles.buttonCalcText}>chronos</p>
                  <GiExtraTime className={styles.atkIcon}/>
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

      <div className={styles.side}>
        <SideInventario/>
      </div>
    </div>
  );
}