import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { RiLockFill } from 'react-icons/ri';
import { GiStarSkull, GiSpookyHouse, GiCaveEntrance } from 'react-icons/gi';
import { enemyStats, enemyStats2 } from '../../shared/stats';

export const Mapa = () => {
    getComputedStyle(document.documentElement).getPropertyValue('--alignIndicador');

    useEffect(() => {
        if (enemyStats.alive && enemyStats2.alive) 
        document.documentElement.style.setProperty('--alignIndicador', 'flex-start')

        if (!enemyStats.alive && enemyStats2.alive) 
        document.documentElement.style.setProperty('--alignIndicador', 'center')

        if (!enemyStats.alive && !enemyStats2.alive)
        document.documentElement.style.setProperty('--alignIndicador', 'flex-end')
    })

    return (
        <div className={styles.mapaContainer}>
            <div className={styles.mapa}>
                <div className={styles.indicador} id='indicador'/>
                <div className={styles.line}>
                    <div className={styles.location}><GiSpookyHouse className={styles.locationIcon}/></div>
                    <div className={styles.location}>
                        { enemyStats.alive 
                            ? <RiLockFill className={styles.locationIcon}/>
                            : <GiCaveEntrance className={styles.locationIcon}/>
                        }
                    </div>
                    <div className={styles.location}>
                        { enemyStats2.alive 
                            ? <RiLockFill className={styles.locationIcon}/>
                            : <GiStarSkull className={styles.locationIcon}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}