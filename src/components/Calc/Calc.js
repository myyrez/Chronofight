import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"

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

    // reciclar números

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

    if (resposta == trueResultado) return rCerta()
    if (resposta != trueResultado) rErrada()
    console.log(resposta);
    console.log(trueResultado);
    setOperacao('')
  }

  return (
    <div>
      <header>
        <h1 className={styles.titleCalc}>CALCULARK</h1>
      </header>

      <div>
        <h3 className={styles.perguntaCalc}>{pergunta}</h3>
      </div>

      <div>
        <input 
          placeholder="RESPOSTA..."
          type={'number'}
          onChange={updateResposta}/>
        <button 
          className={styles.buttonCalc}
          onClick={() => compararResultado()}>ATACAR</button>
        <button className={styles.buttonCalc}>CURAR</button>
      </div>

      <div>
        <h3>{showResultado}</h3>
      </div>
    </div>
  );
}
