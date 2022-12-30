import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { 
    GiTimeTrap,
    GiExtraTime,
    GiHeavyTimer,
    GiSandsOfTime,
} from 'react-icons/gi';
import { chronosStats } from '../../shared/stats'


export const Inventario = ({
    showing,
    setOpacidade,
    cooldown,
    blockButton,
    setBlockButton,
    chronos,
    setChronos,
    chronosCounter,
    setChronosCounter,
    chronosTotal,
    setChronosTotal,
    chronosAtivo, }) => {
    const [ArmaAtiva, setArmaAtiva] = useState(1)
    const [showCondition, setShowCondition] = useState(false)
    const [chronosAtivado, setChronosAtivado] = useState(false)

    const escolherNomeChronos = () => {
        const escolha = [];

        switch (chronos) {
            case 'areia':
                escolha.push(chronosStats.areiaNome)
                break;

            case 'marca':
                escolha.push(chronosStats.marcaNome)
                break;

            case 'escudo':
                escolha.push(chronosStats.escudoNome)
                break;
        }
        return escolha;
    }

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

    useEffect(() => {
        if (!showing) setShowCondition(false)
        if (chronosAtivo) setChronosAtivado(true)
        if (chronosCounter !== chronosTotal || chronosAtivo) setBlockButton('disabled')
        if (chronosCounter === chronosTotal && !chronosAtivo && cooldown === '') setBlockButton('')

        if (ArmaAtiva == 1) {
            document.getElementById('buttonFlex1').style.marginBottom = '2rem'
            document.getElementById('buttonFlex1').style.borderWidth = '2px'
            document.getElementById('buttonFlex2').style.marginBottom = '0rem'
            document.getElementById('buttonFlex2').style.borderWidth = '0px'
            document.getElementById('buttonFlex3').style.marginBottom = '0rem'
            document.getElementById('buttonFlex3').style.borderWidth = '0px'
            setChronos('areia')
            if (chronosCounter === chronosTotal && !chronosAtivado) {
                setChronosTotal(chronosStats.areiaChronosInicial)
                setChronosCounter(chronosStats.areiaChronosInicial)
            }
            if (chronosCounter === chronosTotal && chronosAtivado) {
                setChronosTotal(chronosStats.areiaChronosTotal)
                setChronosCounter(chronosStats.areiaChronosTotal)
            }
        }
        if (ArmaAtiva == 2) {
            document.getElementById('buttonFlex1').style.marginBottom = '0rem'
            document.getElementById('buttonFlex1').style.borderWidth = '0px'
            document.getElementById('buttonFlex2').style.marginBottom = '2rem'
            document.getElementById('buttonFlex2').style.borderWidth = '2px'
            document.getElementById('buttonFlex3').style.marginBottom = '0rem'
            document.getElementById('buttonFlex3').style.borderWidth = '0px'
            setChronos('marca')
            if (chronosCounter === chronosTotal && !chronosAtivado) {
                setChronosTotal(chronosStats.marcaChronosInicial)
                setChronosCounter(chronosStats.marcaChronosInicial)
            }
            if (chronosCounter === chronosTotal && chronosAtivado) {
                setChronosTotal(chronosStats.marcaChronosTotal)
                setChronosCounter(chronosStats.marcaChronosTotal)
            }
        }
        if (ArmaAtiva == 3) {
            document.getElementById('buttonFlex1').style.marginBottom = '0rem'
            document.getElementById('buttonFlex1').style.borderWidth = '0px'
            document.getElementById('buttonFlex2').style.marginBottom = '0rem'
            document.getElementById('buttonFlex2').style.borderWidth = '0px'
            document.getElementById('buttonFlex3').style.marginBottom = '2rem'
            document.getElementById('buttonFlex3').style.borderWidth = '2px'
            setChronos('escudo')
            if (chronosCounter === chronosTotal && !chronosAtivado) {
                setChronosTotal(chronosStats.escudoChronosInicial)
                setChronosCounter(chronosStats.escudoChronosInicial)
            }
            if (chronosCounter === chronosTotal && chronosAtivado) {
                setChronosTotal(chronosStats.escudoChronosTotal)
                setChronosCounter(chronosStats.escudoChronosTotal)
            }
        }
    })

    const ativarArma1 = () => {
        setArmaAtiva(1)
    }
    const ativarArma2 = () => {
        setArmaAtiva(2)
    }
    const ativarArma3 = () => {
        setArmaAtiva(3)
    }
    
    const showHideCondition = () => {
        if (!showCondition) {
            setOpacidade(document.documentElement.style.setProperty('--display', 'flex'))
            setShowCondition(true)
            
            setTimeout(() => {
                document.getElementById('conditionDiv').style.opacity = '1'
            }, 1);
        } else {
            document.getElementById('conditionDiv').style.opacity = '0'

            setTimeout(() => {
                setOpacidade(document.documentElement.style.setProperty('--display', 'none'))
                setShowCondition(false)
            }, 350);
        }
    }

    return (
        <div className={styles.invtrContainer}>
            <div className={styles.nameContainer}>
                <div className={styles.invtrBody}>
                    <div id='buttonFlex1' className={styles.buttonFlex}>
                        <button
                            disabled={blockButton}
                            id='arma1'
                            value='1'
                            className={styles.invtrArmas}
                            onClick={ativarArma1}><GiSandsOfTime className={styles.svgArma}/></button>
                    </div>
                    <div id='buttonFlex2' className={styles.buttonFlex}>
                        <button
                            disabled={blockButton}
                            id='arma2'
                            value='2' 
                            className={styles.invtrArmas}
                            onClick={ativarArma2}><GiHeavyTimer className={styles.svgArma}/></button>
                    </div>
                    <div id='buttonFlex3' className={styles.buttonFlex}>
                        <button
                            disabled={blockButton}
                            id='arma3'
                            value='3' 
                            className={styles.invtrArmas}
                            onClick={ativarArma3}><GiTimeTrap className={styles.svgArma}/></button>
                    </div>

                    <div className={styles.conditionSignDiv} onClick={showHideCondition}>
                        <p className={styles.conditionSign}>?</p>
                    </div>

                </div>
                <p className={styles.nameChronos}>{ escolherNomeChronos() }</p>
            </div>
            <div className={styles.descricaoChronos}>
                <h4 style={{fontSize: '20px', marginBlock: '1rem'}}>Habilidade:</h4>
                <p className={styles.chronosText}>{ escolherDescricaoChronos() }</p>
            </div>
            <div className={styles.infoChronos}>
                <h4 style={{fontSize: '20px', marginBlock: '1rem'}}>Informação:</h4>
                <p className={styles.chronosText}>{ escolherEfeitoChronos() }</p>
            </div>
        </div>
    )
}