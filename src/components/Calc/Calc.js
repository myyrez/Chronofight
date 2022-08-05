import React from "react";
import styles from "./styles.module.css"

export default function Calc() {
  return (
    <div>
      <header>
        <h1 className={styles.titleCalc}>CALCULARK</h1>
      </header>

      <div>
        <h3 className={styles.perguntaCalc}>pergunta...</h3>
      </div>

      <div>
        <input placeholder="RESPOSTA..."/>
        <button className={styles.buttonCalc}>ATACAR</button>
        <button className={styles.buttonCalc}>CURAR</button>

      </div>
    </div>
  );
}
