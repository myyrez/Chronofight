import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { BiMinus } from "react-icons/bi"
import { GiShardSword } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";
import { RiDeleteBack2Line } from "react-icons/ri";
import '../../assets/fonts/ThisSucksRegular-Y9yo.ttf';

export const Calc = () => {
  const [resposta, setResposta] = useState('');
  const [pergunta, setPergunta] = useState([]);
  const [operacao, setOperacao] = useState('');
  const [showResultado, setShowResultado] = useState('');
  const [n1] = useState(parseInt(Math.floor(Math.random() * 10)));
  const [n2] = useState(parseInt(Math.floor(Math.random() * 10)));

  let trueResultado;

  const criarDigitos = () => {
    const digitos = [];
    const j = 0

    for (let i = 1; i < 11; i++) {
      if (i === 10) {
        digitos.push(
          <button className={styles.buttonPad} onClick={updateResposta} value={j}>{j}</button>
        );
      } else {
        digitos.push(
          <button className={styles.buttonPad} onClick={updateResposta} value={i}>{i}</button>
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

  const gerarConta = () => {
    let verificador = Math.floor(Math.random() * 3);

    switch (verificador) {
      case 0:
        setPergunta(`${n1} + ${n2}`)
        setOperacao('soma')
        break;
      case 1:
        setPergunta(`${n1} - ${n2}`)
        setOperacao('subtracao')
        break;
      case 2:
        setPergunta(`${n1} x ${n2}`)
        setOperacao('multip')
        break;
    }
  }

  useEffect(() => {
    gerarConta();
  }, [])

  const rCerta = () => {
    setShowResultado("certo");
  }
  const rErrada = () => {
    setShowResultado("errado");
  }

  const compararResultado = () => {
    switch (operacao) {
      case 'soma':
        trueResultado = n1 + n2;
        break;
      case 'subtracao':
        trueResultado = n1 - n2;
        break;
      case 'multip':
        trueResultado = n1 * n2;
        break;
    }

    if (resposta == trueResultado) rCerta();
    if (resposta != trueResultado) rErrada();
    setOperacao('');
  }

  return (
    <div className={styles.containerCalc}>
      <header className={styles.headerCalc}>
        <h1 className={styles.titleCalc}>oi</h1>
      </header>

      <div>
        <h3 className={styles.perguntaCalc}>{pergunta}</h3>
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
          onClick={apagarResposta}>
            <RiDeleteBack2Line className={styles.deleteIcon}/>
        </button>
        <button 
          className={styles.buttonMenos}
          onClick={adicionarMenos}>
            <BiMinus className={styles.deleteIcon}/>
        </button>
      </div>

      <div className={styles.buttonDivCalc}>
        <div className={styles.buttonDivCalc2}>
          <button 
            className={styles.buttonCalcAtk}
            onClick={() => compararResultado()}>
              <p className={styles.buttonCalcText}>ATACAR</p>
              <GiShardSword className={styles.atkIcon}/>
          </button>
        </div>
        <div className={styles.buttonDivCalc2}>
          <button 
            className={styles.buttonCalcCurar}>
              <p className={styles.buttonCalcText}>CURAR</p>
              <GiHealthPotion className={styles.healIcon}/>
          </button>
        </div>
      </div>

      {/* <div className={styles.resultadoDivCalc}>
        <h3 className={styles.resultadoCalc}>{showResultado}</h3>
      </div> */}
    </div>
  );
}