import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { enemyStats, enemyStats2, chronosStats } from '../../shared/stats';

export const Transition = ({
    enemyVidaAtual,
    setCooldown,
    setCuraCooldown,
    setCuraCounter,
    chronos,
    setChronosCooldown,
    setChronosCounter,
    setBlockButton 
}) => {
    var background = document.getElementById('transitionBackground')
    var paragrafo1 = document.getElementById('paragrafo1')
    var paragrafo2 = document.getElementById('paragrafo2')
    var paragrafo3 = document.getElementById('paragrafo3')
    var paragrafo4 = document.getElementById('paragrafo4')
    var skipButton = document.getElementById('skipButton')

    useEffect(() => {
        if (enemyVidaAtual <= 0) {
            setCooldown('disabled')
            setCuraCooldown('disabled')
            setChronosCooldown('disabled')
            setBlockButton('disabled')

            setTimeout(() => {
                background.style.display = 'flex'
                setTimeout(() => { background.style.opacity = 1 }, 10);
            
                if (enemyStats.alive) {
                    paragrafo1.style.display = 'flex'
                    setTimeout(() => { paragrafo1.style.opacity = 1 }, 2500);
                    
                    paragrafo2.style.display = 'flex'
                    setTimeout(() => { paragrafo2.style.opacity = 1 }, 4500);

                    setTimeout(() => {
                        skipButton.style.display = 'flex'
                        setTimeout(() => { skipButton.style.opacity = 1 }, 10);
                    }, 5100);

                    paragrafo3.style.display = 'flex'
                    setTimeout(() => { paragrafo3.style.opacity = 1 }, 6500);

                    paragrafo4.style.display = 'flex'
                    setTimeout(() => { paragrafo4.style.opacity = 1 }, 8500);
                }

                if (!enemyStats.alive && enemyStats2.alive) {}

                if (!enemyStats.alive && !enemyStats2.alive) {}
            }, 2000);
        }
    })

    const closeTransition = () => {
        setCooldown('')
        setCuraCooldown('')
        setCuraCounter(0)
        setChronosCooldown('')
        setBlockButton('')

        if (chronos === 'areia') {
            setChronosCounter(chronosStats.areiaChronosInicial)
        }
        if (chronos === 'marca') {
            setChronosCounter(chronosStats.marcaChronosInicial)
        }
        if (chronos === 'escudo') {
            setChronosCounter(chronosStats.escudoChronosInicial)
        }

        background.style.opacity = 0
        setTimeout(() => { background.style.display = 'none' }, 1500); 
    }

    return (
        <div className={styles.background} id='transitionBackground'>
            <p className={styles.text} style={{display: 'none', opacity: 0}} id='paragrafo1'>Você derrota o seu inimigo, mas sente um chamado em algum lugar.</p>
            <p className={styles.text} style={{display: 'none', opacity: 0}} id='paragrafo2'>Seguindo o caminho, há uma caverna na base da montanha. Uma construção se revela lá dentro, parecendo uma base desgastada.</p>
            <p className={styles.text} style={{display: 'none', opacity: 0}} id='paragrafo3'>O lugar é escuro e tem um silêncio terrível, entrecortado pelo chiar de ratos. O único caminho é um corredor que parece não ter fim.</p>
            <p className={styles.text} style={{display: 'none', opacity: 0}} id='paragrafo4'>Finalmente, uma porta pode ser avistada no fim do caminho. Mas alguém, ou alguma coisa, está parada na frente dela.</p>
            <div className={styles.buttonDiv}>
                <button
                    style={{display: 'none', opacity: 0}}
                    className={styles.skipButton}
                    onClick={ closeTransition }
                    id='skipButton'>Continuar -→</button>
            </div>
        </div>
    )
}