import React from 'react';
import styles from './styles.module.css';

export const Intro = () => {
    var background = document.getElementById('introBackground')

    const fecharIntro = () => {
        background.style.opacity = 0
        setTimeout(() => { background.style.display = 'none' }, 1500);
    }

    return (
        <div className={styles.introBackground} id='introBackground'>
            <div className={styles.introContainer}>
                <img className={styles.imgCanvas}/>
                <h1 className={styles.introText}>Há muito tempo atrás, um poderoso mago descobriu como controlar o tempo.</h1>
                <h1 className={styles.introText}>Os reinos de seu continente passaram a prosperar, enquanto ele tecia uma nova realidade nos céus, como um ser divino.</h1>
                <h1 className={styles.introText}>Criações que almejavam alcançar o mago geraram aberrações. Desde então, o mago nunca mais se manifestou. Agora, cruzar com monstros é algo comum.</h1>
                <h1 className={styles.introText}>Você parte em uma jornada em busca do Deus-Mago Chronos para conseguir respostas.</h1>
                <button className={styles.introButton} onClick={ fecharIntro }>Continuar -→</button>
            </div>
        </div>
    )
}