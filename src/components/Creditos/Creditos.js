import React, { useEffect } from 'react';
import styles from './styles.module.css';

export const Creditos = ({ callCreditos }) => {
    var background = document.getElementById('creditosBackground')
    var bloco1 = document.getElementById('bloco1')
    var bloco2 = document.getElementById('bloco2')
    var bloco3 = document.getElementById('bloco3')
    var bloco4 = document.getElementById('bloco4')

    useEffect(() => {
        if (callCreditos) {
            setTimeout(() => { background.style.display = 'flex' }, 1);
            setTimeout(() => { background.style.opacity = 1}, 100);
            setTimeout(() => { bloco1.style.opacity = 1 }, 1000);
            setTimeout(() => { bloco2.style.opacity = 1 }, 4000);
            setTimeout(() => { bloco3.style.opacity = 1 }, 7000);
            setTimeout(() => { bloco4.style.opacity = 1 }, 10000);
        }
    })

    return (
        <div className={styles.creditosBackground} id='creditosBackground'>
            <div className={styles.creditosContainer} id='creditosContainer'>
                <div className={styles.bloco} id='bloco1'>
                    <div className={styles.funcao}>Criado por</div>
                    <div className={styles.nome}>Matheus Franco</div>
                </div>
                <div className={styles.bloco} id='bloco2'>
                    <div className={styles.funcao}>Artes & Ícones</div>
                    <div className={styles.nome}>Ansimuz<br/>CodeManuPro<br/>DavitMasia<br/>Deep_Fold<br/>LuizGdeMelo<br/>React Icons</div>
                </div>
                <div className={styles.blocoVoce} id='bloco3'>
                    <div className={styles.funcaoVoce}>Agradecimentos</div>
                    <div className={styles.voce}>Patrícia Franco<br/>Giovanna Andrade<br/>Iurin Queiroz<br/>Kaio Ignacio<br/>Rafael Lindemann</div>
                </div>
                <div className={styles.blocoVoce} id='bloco4'>
                    <div className={styles.voce}>e você!<br/>Obrigado por jogar! ♥</div>
                </div>
            </div>
        </div>
    )
}