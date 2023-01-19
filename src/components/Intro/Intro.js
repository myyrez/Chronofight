import React, { useEffect } from 'react';
import styles from './styles.module.css';

export const Intro = () => {
    var background = document.getElementById('introBackground')
    var text1 = document.getElementById('text1')
    var text2 = document.getElementById('text2')
    var text3 = document.getElementById('text3')
    var text4 = document.getElementById('text4')
    var load = true

    if (load) {
        setTimeout(() => { text1.style.opacity = 1 }, 1000);
    
        setTimeout(() => { text2.style.opacity = 1 }, 4000);
    
        setTimeout(() => { text3.style.opacity = 1 }, 7000);
    
        setTimeout(() => { text4.style.opacity = 1 }, 10000);
    }

    const fecharIntro = () => {
        background.style.opacity = 0
        setTimeout(() => { background.style.display = 'none' }, 1500);
    }

    return (
        <div className={styles.introBackground} id='introBackground'>
            <div className={styles.introContainer}>
                <img className={styles.imgCanvas}/>
                <h1 id='text1' style={{opacity: '0'}} className={styles.introText}>Há muito tempo atrás, um poderoso mago descobriu como controlar o tempo.</h1>
                <h1 id='text2' style={{opacity: '0'}} className={styles.introText}>Os reinos de seu continente passaram a prosperar, enquanto ele tecia uma nova realidade nos céus, como um ser divino.</h1>
                <h1 id='text3' style={{opacity: '0'}} className={styles.introText}>Criações com o objetivo de alcançar o mago geraram aberrações. Desde então, o mago nunca mais se manifestou. Agora, cruzar com monstros é algo comum.</h1>
                <h1 id='text4' style={{opacity: '0'}} className={styles.introText}>Você então parte em uma jornada em busca de Deus-Mago Chronos.</h1>
                <button className={styles.introButton} onClick={ fecharIntro }>Continuar -→</button>
            </div>
        </div>
    )
}