import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { tutorialText } from "../../shared/stats";

export const Tutorial = ({ modalOpen, setModalOpen}) => {
    const [paginaText, setPaginaText] = useState(tutorialText.p1)
    const [paginaCounter, setPaginaCounter] = useState(1)

    const refPaginaCounter = useRef(paginaCounter)
    refPaginaCounter.current = paginaCounter

    getComputedStyle(document.documentElement).getPropertyValue('--modal')

    const closeModal = () => setModalOpen(false)

    const handlePaginaCounter = e => {
        if (e.target.value === '-' && paginaCounter === 1) return;
        if (e.target.value === '+' && paginaCounter === 5) return;
        if (e.target.value === '-') setPaginaCounter(paginaCounter - 1);
        if (e.target.value === '+') setPaginaCounter(paginaCounter + 1);
    }

    useEffect(() => {
        if (!modalOpen) {
            document.getElementById('tutorial').style.opacity = 0
            setTimeout(() => {
                document.documentElement.style.setProperty('--modal', 'none')
            }, 350);
    
            setModalOpen(false)
        }
        if (modalOpen) {
            document.documentElement.style.setProperty('--modal', 'flex')
            setTimeout(() => {
                document.getElementById('tutorial').style.opacity = 1
            }, 1);
    
            setModalOpen(true)
        }

        switch (paginaCounter) {
            case 1:
                setPaginaText(tutorialText.p1)
                break;
            case 2:
                setPaginaText(tutorialText.p2)
                break;
            case 3:
                setPaginaText(tutorialText.p3)
                break;
            case 4: 
                setPaginaText(tutorialText.p4)
                break;
            case 5:
                setPaginaText(tutorialText.p5)
                break;
        }
    })

    return (
        <div className={styles.modalBackground} id='tutorial'>
            <div className={styles.modalBody}>
                <button
                    id="xButton"
                    className={styles.closeButton}
                    onClick={ closeModal }>X
                </button>

                <div className={styles.imgSpace}>
                    <img 
                        src={require(`../../assets/image/gameplayPrint${paginaCounter}.png`)}
                        alt="imagemIlustração" 
                        className={styles.imagemIlustracao}
                    />
                </div>

                <div className={styles.textSpace}>
                    <p>{paginaText}</p>
                </div>

                <div className={styles.changePage}>
                    <button 
                        className={styles.changePageButton}
                        onClick={ handlePaginaCounter }
                        value={'-'}>←-</button>
                    <button 
                        className={styles.changePageButton}
                        onClick={ handlePaginaCounter }
                        value={'+'}>-→</button>
                </div>
            </div>
        </div>
    )
}