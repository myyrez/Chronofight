import React from "react";
import styles from "./styles.module.css"
import { Calc } from "../"
import { BarraVida } from "../"
import { Personagens } from "../"

export const App = () => {
  return (
    <>
      <div className={styles.calc}>
        <Calc/>
      </div>
      {/* <div className={styles.rpg}>
        <Personagens/>
      </div> */}
    </>
  );
}