import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { tutorialText } from "../../shared/stats";

export const Tutorial = ({ modalOpen, setModalOpen, rightArrow, leftArrow, setRightArrow, setLeftArrow}) => {
    const [paginaText, setPaginaText] = useState(tutorialText.p1)
    const [paginaCounter, setPaginaCounter] = useState(1)
    getComputedStyle(document.documentElement).getPropertyValue('--modal')

    const closeModal = () => setModalOpen(false)

    const handlePaginaCounter = e => {
        if (e.target.value === 'leftArrow' && paginaCounter === 1) return;
        if (e.target.value === 'rightArrow' && paginaCounter === 6) return;
        if (e.target.value === 'leftArrow') setPaginaCounter(paginaCounter - 1);
        if (e.target.value === 'rightArrow') setPaginaCounter(paginaCounter + 1);
        document.getElementById('textSpace').scrollBy({ top: -9000 })
    }

    useEffect(() => {
        if (rightArrow) {
            setRightArrow(false);

            if (paginaCounter === 6) return;
            setPaginaCounter(paginaCounter + 1);
            document.getElementById('textSpace').scrollBy({ top: -9000 })
        }
        if (leftArrow) {
            setLeftArrow(false)

            if (paginaCounter === 1) return;
            setPaginaCounter(paginaCounter - 1);
            document.getElementById('textSpace').scrollBy({ top: -9000 })
        }

        if (!modalOpen) {
            document.getElementById('tutorial').style.opacity = 0
            setTimeout(() => {
                document.documentElement.style.setProperty('--modal', 'none')
            }, 350);
    
            setModalOpen(false)
        }
        if (modalOpen) {
            document.documentElement.style.setProperty('--modal', 'flex')
            document.getElementById('textSpace').scrollBy({ top: -9000 })
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
            case 6:
                setPaginaText(tutorialText.p6)
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

                <div className={styles.textSpace} id='textSpace'>
                    <p>{paginaText}</p>
                </div>

                <div className={styles.changePage}>
                    <button 
                        className={styles.changePageButton}
                        onClick={ handlePaginaCounter }
                        id='leftArrowButton'
                        value={'leftArrow'}>←-</button>
                    <button 
                        className={styles.changePageButton}
                        onClick={ handlePaginaCounter }
                        id='rightArrowButton'
                        value={'rightArrow'}>-→</button>
                </div>
            </div>
        </div>
    )
}