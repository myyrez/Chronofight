import { React, useEffect, useState } from "react";
import styles from "./styles.module.css";
// import player from "../../assets/image/char1.png";
// import opponent from "../../assets/image/enem1.png";

export const BarraVida = () => {
  return (
    <>
      <div className={styles.player}>
        <img src={styles.player}/>
      </div>
      
      <div className={styles.barra}>
        <div className={styles.hit}>‎</div>
      </div>
    </>
  );
};
