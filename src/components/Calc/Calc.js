import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import { GiRustySword } from "react-icons/gi"
import { GiHealthPotion } from "react-icons/gi"

export const Calc = () => {
  const [resposta, setResposta] = useState()
  const [pergunta, setPergunta] = useState([])
  const [operacao, setOperacao] = useState('')
  const [showResultado, setShowResultado] = useState('')
  const [n1, setN1] = useState(parseInt(Math.floor(Math.random() * 10)))
  const [n2, setN2] = useState(parseInt(Math.floor(Math.random() * 10)))

  let trueResultado

  const updateResposta = e => {
    setResposta(e.target.value)
  }

  const gerarConta = () => {
    let verificador = Math.floor(Math.random() * 3)

    switch (verificador) {
      case 0:
        setPergunta(`quanto é ${n1} + ${n2}?`)
        setOperacao('soma')
        break;
      case 1:
        setPergunta(`quanto é ${n1} - ${n2}?`)
        setOperacao('subtracao')
        break;
      case 2:
        setPergunta(`quanto é ${n1} * ${n2}?`)
        setOperacao('multip')
        break;
    }
  }

  useEffect(() => {
    gerarConta()
  }, [])

  const rCerta = () => {
    setShowResultado("certo")
  }
  const rErrada = () => {
    setShowResultado("errado")
  }

  const compararResultado = () => {
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

    if (resposta == trueResultado) rCerta()
    if (resposta != trueResultado) rErrada()
    setOperacao('')
  }

  return (
    <div className={styles.containerCalc}>
      <header className={styles.headerCalc}>
        <h1 className={styles.titleCalc}>oi</h1>
      </header>

      <div>
        <h3 className={styles.perguntaCalc}>{pergunta}</h3>
      </div>

      <div>
        <input 
          className={styles.inputCalc}
          placeholder="RESPOSTA..."
          type={'number'}
          onChange={updateResposta}/>
      </div>

      <div className={styles.resultadoDivCalc}>
        <h3 className={styles.resultadoCalc}>{showResultado}</h3>
      </div>

      <div className={styles.buttonDivCalc}>
        <button 
          className={styles.buttonCalcAtk}
          onClick={() => compararResultado()}>
            <p className={styles.buttonCalcText}>ATACAR</p>
            <GiRustySword className={styles.atkIcon}/>
        </button>
        <button 
          className={styles.buttonCalcCurar}>
            <p className={styles.buttonCalcText}>CURAR</p>
            <GiHealthPotion className={styles.healIcon}/>
        </button>
      </div>
    </div>
  );
}