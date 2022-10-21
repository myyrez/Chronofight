import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { BiMinus } from "react-icons/bi";
import { Personagens } from "../Personagens";
import { GiShardSword } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";
import { RiDeleteBack2Line } from "react-icons/ri";
import { BarraProgresso } from "../BarraProgresso";
import '../../assets/fonts/ThisSucksRegular-Y9yo.ttf';

export const Calc = (props) => {
  const [resposta, setResposta] = useState('');
  const [pergunta, setPergunta] = useState('');
  const [operacao, setOperacao] = useState('');
  const [showResultado, setShowResultado] = useState('');
  const [n1, setN1] = useState(parseInt(Math.floor(Math.random() * 10)));
  const [n2, setN2] = useState(parseInt(Math.floor(Math.random() * 10)));
  const [dano, setDano] = useState(20)
  const [cura, setCura] = useState(15)
  const [click, setClick] = useState(false)
  const [cooldown, setCooldown] = useState('')
  const [curaCooldown, setCuraCooldown] = useState('')
  const [travarConfirmar, setTravarConfirmar] = useState('disabled')
  const [acertou, setAcertou] = useState(false)
  const [errou, setErrou] = useState(false)
  const [curou, setCurou] = useState(false)
  const refResultado = useRef(showResultado)
  refResultado.current = showResultado
  let trueResultado;
  const [curaCounter, setCuraCounter] = useState(0)

  const criarDigitos = () => {
    const digitos = [];
    const j = 0

    for (let i = 1; i < 11; i++) {
      if (i === 10) {
        digitos.push(
          <button 
            className={styles.buttonPad}
            disabled={travarConfirmar}
            onClick={updateResposta}
            value={j}>{j}</button>
        );
      } else {
        digitos.push(
          <button 
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
    if (resposta === '') return setResposta(e.target.value);
    if (resposta == '-' && e.target.value == 0) return setResposta(0)
    setResposta(resposta + e.target.value);
  }

  const apagarResposta = () => {
    setResposta('');
  }
  const adicionarMenos = () => {
    if (resposta === '') return setResposta('-');
  }
  
  useEffect(() => {
    setClick(false)
    setAcertou(false)
    setErrou(false)
    setCurou(false)
    if (operacao === 'soma') setPergunta(`${n1} + ${n2}`)
    if (operacao === 'subtracao') setPergunta(`${n1} – ${n2}`)
    if (operacao === 'multip') setPergunta(`${n1} x ${n2}`)
  });

  useEffect(() => {
    if (click) {
      setCuraCounter(curaCounter - 1)

      getComputedStyle(document.documentElement).getPropertyValue('--abrir-pergunta');
      getComputedStyle(document.documentElement).getPropertyValue('--diminuir-square');
      
      setTimeout(() => {
        if (refResultado.current != 'certo' && refResultado.current != 'errado') {
          setShowResultado('errou')
          setErrou(true)
        }
        if (curaCounter <= 0) {
          setCuraCooldown('')
        }
      }, 5000);
    }
  });

  const curar = () => {
    setCuraCounter(3)
    setCurou(true)
    setCuraCooldown('disabled')
  }

  const atacar = () => {
    setClick(true)
    setTravarConfirmar('')
    setShowResultado('')
    setCuraCooldown('disabled')
    setCooldown('disabled')
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
    setN1(parseInt(Math.floor(Math.random() * 10)))
    setN2(parseInt(Math.floor(Math.random() * 10)))

    setTimeout(() => {
      if (curaCounter <= 0) setCuraCooldown('') 
      setTravarConfirmar('disabled')
      setCooldown('')
      setResposta('')
      document.documentElement.style.setProperty('--abrir-pergunta', '-4rem')
      document.documentElement.style.setProperty('--diminuir-square', '4.5rem')
    }, 5000);
  }

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
    
    if (resposta == trueResultado) { 
      setShowResultado('certo')
      setAcertou(true);
      setResposta('');
    } else {
      setShowResultado('errado');
      setErrou(true);
      setResposta('');
    }
  }

  return (
    <>
      <div className={styles.containerCalc}>
        <header className={styles.headerCalc}>
          <h1 className={styles.titleCalc}>oi</h1>
        </header>

        <div className={styles.perguntaDiv}>
          <div className={styles.square}/>

          <h3 className={styles.perguntaCalc}>{pergunta}</h3>

          <div className={styles.square}/>
        </div>

        <div className={styles.respostaDiv}>
          <input
            className={styles.inputCalc}
            placeholder="RESPOSTA..."
            type={'number'}
            onChange={updateResposta}
            value={resposta}
            disabled>
          </input>
        </div>

        <div className={styles.buttonGrid}>
          { criarDigitos() }
          <button 
            className={styles.buttonApagar}
            disabled={travarConfirmar}
            onClick={apagarResposta}>
              <RiDeleteBack2Line className={styles.deleteIcon}/>
          </button>
          <button 
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

      <BarraProgresso click={click}/>

      <div className={styles.containerRpg}>
        <div className={styles.characterSpace}>
          <Personagens
            dano={dano}
            cura={cura}
            curou={curou}
            acertou={acertou}
            errou={errou}/>
        </div>

        <div className={styles.buttonSpace}>
          <div className={styles.buttonDivCalc}>
            <div className={styles.buttonDivCalc2}>
              <button 
                className={styles.buttonCalcAtk}
                disabled={cooldown}
                onClick={() => atacar()}>
                  <p className={styles.buttonCalcText}>ATACAR</p>
                  <GiShardSword className={styles.atkIcon}/>
              </button>
            </div>
            <div className={styles.buttonDivCalc2}>
              <button 
                className={styles.buttonCalcCurar}
                disabled={curaCooldown}
                onClick={() => curar()}>
                  <p className={styles.buttonCalcText}>CURAR</p>
                  <GiHealthPotion className={styles.healIcon}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}