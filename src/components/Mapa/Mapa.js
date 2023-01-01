import React from 'react';
import styles from './styles.module.css';
import { RiLockFill } from 'react-icons/ri';
import { GiStarSkull, GiSpookyHouse, GiCaveEntrance } from 'react-icons/gi';

export const Mapa = () => {
    return (
        <div className={styles.mapaContainer}>
            <div className={styles.mapa}>
                <div className={styles.indicador}/>
                <div className={styles.line}>
                    <div className={styles.location}><GiSpookyHouse className={styles.locationIcon}/></div>
                    <div className={styles.location}><GiCaveEntrance className={styles.locationIcon}/></div>
                    <div className={styles.location}><GiStarSkull className={styles.locationIcon}/></div>
                </div>
            </div>
        </div>
    )
}