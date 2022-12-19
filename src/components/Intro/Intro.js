import React, { useState } from "react";
import styles from "./styles.module.css";

export const Intro = ({ setModo, setNome, nome }) => {
    // const [nomeEscrito, setNomeEscrito] = useState('')

    const start = () => {
        setModo('Battle')
    }

    const handleInputChange = e => {
        if (nome !== '') setNome(nome + e.target.value)
        setNome(e.target.value)
    }

    console.log(nome)

    return (
        <div className={styles.mainContainerIntro}>
            <div className={styles.centerContainer}>
                <label>Nome:</label>
                <input 
                    className={styles.inputIntro} 
                    onChange={handleInputChange}
                    value={nome}/>
                <button className={styles.buttonIntro} onClick={start}>Começar</button>
            </div>
        </div>
    )
}