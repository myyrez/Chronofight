import React, { useState } from 'react';
import styles from './styles.module.css';
import { 
    GiSchoolBag,
    GiTimeTrap,
    GiSandstorm,
    GiExtraTime,
    GiHeavyTimer,
    GiSandsOfTime,
} from 'react-icons/gi';
import { chronosStats } from '../../shared/stats'


export const Inventario = ({ chronos }) => {
    var show = false
    const [ArmaAtiva, setArmaAtiva] = useState(0)
    const corFundo = 'transparent'
    const cor = '#f4f4f4'
    const corFundoInativo = '#313131'
    const corInativo = '#3cc1ab'
    var chronosAtivo1 = false
    var chronosAtivo2 = false
    var chronosAtivo3 = false

    const escolherDescricaoChronos = () => {
        const escolha = [];

        switch (chronos) {
            case 'areia':
                escolha.push(chronosStats.areiaDescricao)
                break;

            case 'marca':
                escolha.push(chronosStats.marcaDescricao)
                break;

            case 'escudo':
                escolha.push(chronosStats.escudoDescricao)
                break;
        }
        return escolha;
    }

    const escolherEfeitoChronos = () => {
        const escolha = [];

        switch (chronos) {
            case 'areia':
                escolha.push(chronosStats.areiaEfeito)
                break;

            case 'marca':
                escolha.push(chronosStats.marcaEfeito)
                break;

            case 'escudo':
                escolha.push(chronosStats.escudoEfeito)
                break;
        }
        return escolha;
    }

    const showInventario = () => {
        getComputedStyle(document.documentElement).getPropertyValue('--visibilidade')
        getComputedStyle(document.documentElement).getPropertyValue('--corFundo')

        if (!show) {
            document.documentElement.style.setProperty('--visibilidade', 'visible')
            document.documentElement.style.setProperty('--corFundo', 'rgba(90, 90, 90, 0.343)')
            show = true
        } else {
            document.documentElement.style.setProperty('--visibilidade', 'hidden')
            document.documentElement.style.setProperty('--corFundo', 'rgba(0, 0, 0, 0.543)')
            show = false
        }
    }

    getComputedStyle(document.documentElement).getPropertyValue('--corFundoArma')
    getComputedStyle(document.documentElement).getPropertyValue('--corArma')
    getComputedStyle(document.documentElement).getPropertyValue('--borderChronos')

    const ativarArma1 = () => {
        if (ArmaAtiva !== 0) {
            document.getElementById('arma1').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma1').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma2').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma2').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma3').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma3').style.setProperty('--corArma', '#f4f4f4')
        }
        if (ArmaAtiva !== 1) {
            document.getElementById('arma1').style.setProperty('--corFundoArma', 'transparent')
            document.getElementById('arma1').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma1').style.setProperty('--borderChronos', '2px solid #45dec4')
            setArmaAtiva(1)
        } else {
            document.getElementById('arma1').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma1').style.setProperty('--corArma', '#f4f4f4')
            setArmaAtiva(0)
        }

    }
    const ativarArma2 = () => {
        if (ArmaAtiva !== 0) {
            document.getElementById('arma1').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma1').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma2').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma2').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma3').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma3').style.setProperty('--corArma', '#f4f4f4')
        }
        if (ArmaAtiva !== 2) {
            document.getElementById('arma2').style.setProperty('--corFundoArma', 'transparent')
            document.getElementById('arma2').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma1').style.setProperty('--borderChronos', '2px solid #45dec4')
            setArmaAtiva(2)
        } else {
            document.getElementById('arma2').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma2').style.setProperty('--corArma', '#f4f4f4')
            setArmaAtiva(0)
        }

    }
    const ativarArma3 = () => {
        if (ArmaAtiva !== 0) {
            document.getElementById('arma1').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma1').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma2').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma2').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma3').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma3').style.setProperty('--corArma', '#f4f4f4')
        }
        if (ArmaAtiva !== 3) {
            document.getElementById('arma3').style.setProperty('--corFundoArma', 'transparent')
            document.getElementById('arma3').style.setProperty('--corArma', '#f4f4f4')
            document.getElementById('arma1').style.setProperty('--borderChronos', '2px solid #45dec4')
            setArmaAtiva(3)
        } else {
            document.getElementById('arma3').style.setProperty('--corFundoArma', '#33a592')
            document.getElementById('arma3').style.setProperty('--corArma', '#f4f4f4')
            setArmaAtiva(0)
        }
    }

    return (
        <div className={styles.invtrContainer}>
            <div className={styles.invtrBody}>
                <div className={styles.armaGroup}>
                    <button
                        id='arma1'
                        value='1' 
                        className={styles.invtrArmas}
                        onClick={ativarArma1}><GiSandsOfTime className={styles.svgArma}/></button>
                    <button
                        id='arma2'
                        value='2' 
                        className={styles.invtrArmas}
                        onClick={ativarArma2}><GiHeavyTimer className={styles.svgArma}/></button>
                    <button 
                        id='arma3'
                        value='3' 
                        className={styles.invtrArmas}
                        onClick={ativarArma3}><GiTimeTrap className={styles.svgArma}/></button>
                </div>
            </div>
            <div className={styles.descricaoChronos}>
                <h4>habilidade:</h4>
                <p className={styles.chronosText}>{ escolherDescricaoChronos() }</p>
            </div>
            <div className={styles.infoChronos}>
                <h4>info:</h4>
                <p className={styles.chronosText}>{ escolherEfeitoChronos() }</p>
            </div>
        </div>
    )
}