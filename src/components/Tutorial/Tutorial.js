import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { tutorialText } from "../../shared/stats";

export const Tutorial = ({ modalOpen, setModalOpen}) => {
    getComputedStyle(document.documentElement).getPropertyValue('--modal')

    const closeModal = () => setModalOpen(false)

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

                </div>

                <div className={styles.textSpace}>
                    <p>{tutorialText.p1}</p>
                </div>

                <div className={styles.changePage}>
                    <button className={styles.changePageButton}>←-</button>
                    <button className={styles.changePageButton}>-→</button>
                </div>
            </div>
        </div>
    )
}