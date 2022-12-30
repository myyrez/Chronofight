import React from 'react';
import styles from './styles.module.css';

export const Mapa = () => {
    return (
        <div className={styles.mapaContainer}>
            <img className={styles.mapa} src={require('../../assets/image/mapaBackground2.png')}>

            </img>
        </div>
    )
}