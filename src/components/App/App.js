import React from "react";
import styles from "./styles.module.css"
import { Calc } from "../"
import { Battle } from "../"
import { BarraVida } from "../"
import { Personagens } from "../"

export const App = () => {
  return (
    <>
      <div className={styles.calc}>
        <Battle/>
      </div>
    </>
  );
}