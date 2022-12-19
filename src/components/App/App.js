import React, { useState } from "react";
import styles from "./styles.module.css"
import { Intro } from "../"
import { Battle } from "../"
import { Ending } from "../"

export const App = () => {
  const [modo, setModo] = useState('Battle')
  const [nome, setNome] = useState('')
  const [charEnemyMorto, setCharEnemyMorto] = useState('')

  return (
    <div className={styles.appContainer}>
      {modo === 'Intro' && <Intro setModo={setModo} setNome={setNome} nome={nome}/>}

      {modo === 'Battle' && <Battle setModo={setModo} charEnemyMorto={charEnemyMorto} setCharEnemyMorto={setCharEnemyMorto} />}

      {modo === 'Ending' && <Ending setModo={setModo} nome={nome} charEnemyMorto={charEnemyMorto} setCharEnemyMorto={setCharEnemyMorto} />}
    </div>
  );
}