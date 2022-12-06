import React, { useEffect, useState } from "react";
import styles from './styles.module.css'

export const Skillcheck = ({ callSkillcheck, setCallSkillcheck, hitTiming, setHitTiming }) => {
    
    getComputedStyle(document.documentElement).getPropertyValue('--fadeOut')
    getComputedStyle(document.documentElement).getPropertyValue('--skillcheckTela')

    useEffect(() => {
        if (hitTiming == true) {
            document.getElementById('skillcheckPointer').style.animationPlayState = 'paused'
            setTimeout(() => {
                document.getElementById('container').style.animationPlayState = 'paused'
                document.documentElement.style.setProperty('--fadeOut', 0)
                setCallSkillcheck(false)
                document.documentElement.style.setProperty('--skillcheckTela', 'none')
        }, 1000);
        }
    })

    useEffect(() => {
        if (callSkillcheck) {
            document.documentElement.style.setProperty('--skillcheckTela', 'flex')
            document.documentElement.style.setProperty('--fadeOut', 1)
            document.getElementById('container').style.animationPlayState = 'running'
            setTimeout(() => {
                document.getElementById('skillcheckPointer').style.animationPlayState = 'running'
            }, 1000);
            setTimeout(() => {
                document.getElementById('container').style.animationPlayState = 'paused'
                document.documentElement.style.setProperty('--fadeOut', 0)
                setCallSkillcheck(false)
                document.documentElement.style.setProperty('--skillcheckTela', 'none')
            }, 3500);
        }
    })

    const stopSkillcheck = () => {
        document.getElementById('skillcheckPointer').style.animationPlayState = 'paused'
        setTimeout(() => {
            document.getElementById('container').style.animationPlayState = 'paused'
            document.documentElement.style.setProperty('--fadeOut', 0)
            setCallSkillcheck(false)
            document.documentElement.style.setProperty('--skillcheckTela', 'none')
        }, 1000);
    }

    return (
        <div id='container' className={styles.skillcheckContainer}>
            <div className={styles.skillcheck}>
                <div id="skillcheckPointer" className={styles.pointer}/>
                <div className={styles.skillcheckBarra}>
                    <div className={styles.hitArea}>
                    </div>
                </div>
            </div>
            <button onClick={stopSkillcheck} className={styles.dodgeButton}>Desviar</button>
        </div>
    )
}