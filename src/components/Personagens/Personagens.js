import React from "react";
import { BarraVida } from "../";
import char1 from "../../assets/image/char1.png";
import enem1 from "../../assets/image/enem1.png";
import styles from "./styles.module.css";

export const Personagens = () => {
  return (
    <div className={styles.sumario}>
      <BarraVida />
      <img src={char1} width='250' height='250'/>
    </div>
  );
};
