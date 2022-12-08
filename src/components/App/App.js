import React, { useState } from "react";
import styles from "./styles.module.css"
import { Intro } from "../"
import { Ending } from "../"
import { Battle } from "../"

export const App = () => {
  const [modo, setModo] = useState('Intro')

  return (
    <div>
      {modo === 'Intro' && <Intro setModo={setModo} />}

      {modo === 'Battle' && <Battle setModo={setModo} />}

      {modo === 'Ending' && <Ending setModo={setModo} />}
    </div>
  );
}