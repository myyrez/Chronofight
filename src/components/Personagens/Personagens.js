import React from "react";
import { BarraVida } from "../";
import char3 from "../../assets/image/char3.png";
import enem2 from "../../assets/image/enem2.png";
import styles from "./styles.module.css";

export const Personagens = () => {
  return (
    <>
      <div className={styles.sumario}>
        <BarraVida vidaTotal={50}/>
        <img src={char3} width='350' height='300'/>
      </div>
      <div className={styles.enem}>
        <BarraVida vidaTotal={200}/>
        <img src={enem2} width='250' height='300'/>
      </div>
    </>
  );
};
