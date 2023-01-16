import React, { useState } from "react";
import styles from "./styles.module.css"
import { Battle } from "../"

export const App = () => {
  const [charEnemyMorto, setCharEnemyMorto] = useState('')

  return (
    <div className={styles.appContainer}>
      <Battle charEnemyMorto={charEnemyMorto} setCharEnemyMorto={setCharEnemyMorto} />
    </div>
  );
}