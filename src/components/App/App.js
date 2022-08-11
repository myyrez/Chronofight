import React from "react";
import { Calc } from "../"
import { BarraVida } from "../"
import styles from "./styles.module.css"

export const App = () => {
  return (
    <>
      <div className={styles.calc}>
        <Calc/>
      </div>
      <div className={styles.rpg}>
        <BarraVida/>
      </div>
    </>
  );
}
