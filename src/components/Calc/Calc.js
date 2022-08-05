import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"

export default function Calc() {
  const [resposta, setResposta] = useState()
  let primeiroNum = Math.floor(Math.random() * 11)
  let segundoNum = Math.floor(Math.random() * 11)
  let trueResultado

  const updateResposta = e => {
    setResposta(e.target.value)
  }

  const gerarConta = () => {
    let verificador = Math.floor(Math.random() * 3)

    switch (verificador) {
      case 0:
        trueResultado = primeiroNum + segundoNum
        break;
      case 1:
        trueResultado = primeiroNum - segundoNum
        break;
      case 2: 
        trueResultado = primeiroNum * segundoNum
        break;
    }
  }

  const rCerta = () => {
    
  }
  const rErrada = () => {

  }

  const compararResultado = () => {
    if (resposta === trueResultado) {
      return rCerta()
    }
    rErrada()
  }

  return (
    <div>
      <header>
        <h1 className={styles.titleCalc}>CALCULARK</h1>
      </header>

      <div>
        <h3 className={styles.perguntaCalc}>pergunta...</h3>
      </div>

      <div>
        <input 
          placeholder="RESPOSTA..."
          onChange={updateResposta}/>
        <button 
          className={styles.buttonCalc}>ATACAR</button>
        <button className={styles.buttonCalc}>CURAR</button>

      </div>
    </div>
  );
}
