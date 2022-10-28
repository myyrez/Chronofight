import React from 'react';
import styles from './styles.module.css';
import { 
    GiBleedingWound,
    GiBleedingEye,
    GiReaperScythe,
    GiSchoolBag,
    GiWingedEmblem,
    GiSteelwingEmblem,
    GiBatwingEmblem ,
} from 'react-icons/gi';
import { HiEyeOff } from 'react-icons/hi';


export const Inventario = () => {
    var show = false
    var armaAtiva = false
    var emblemaAtivo = false

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

    const ativarArma = (e) => {
        getComputedStyle(document.documentElement).getPropertyValue('--corFundoArma')
        getComputedStyle(document.documentElement).getPropertyValue('--corArma')
        
        if (e.target.value == '1') document.getElementById('arma1').style.background = 'red'
        document.documentElement.style.setProperty('--corFundoArma', 'background-color: #515151')
        document.documentElement.style.setProperty('--corArma', 'color: #f4f4f4')  
    }
    const ativarEmblema = () => {
        getComputedStyle(document.documentElement).getPropertyValue('--corFundoEmblema')
        getComputedStyle(document.documentElement).getPropertyValue('--corEmblema')
    }

    return (
        <div className={styles.invtrContainer}>
            <button 
                className={styles.invtrButton}
                onClick={showInventario}><GiSchoolBag style={{fontSize: '20px'}}/></button>
            <div className={styles.invtrBody}>
                <button
                    id='arma1'
                    value='1' 
                    className={styles.invtrArmas}
                    onClick={ativarArma}><GiBleedingWound value='1' style={{fontSize: '25px'}}/></button>
                <button
                    id='arma2'
                    value='2' 
                    className={styles.invtrArmas}
                    onClick={ativarArma}><GiBleedingEye value='2' style={{fontSize: '25px'}}/></button>
                <button 
                    id='arma3'
                    value='3' 
                    className={styles.invtrArmas}
                    onClick={ativarArma}><GiReaperScythe style={{fontSize: '25px'}}/></button>
                <button 
                    id='emblema1'
                    value='1' 
                    className={styles.invtrEmblemas}
                    onClick={ativarEmblema}><GiWingedEmblem style={{fontSize: '25px'}}/></button>
                <button 
                    id='emblema2'
                    value='2' 
                    className={styles.invtrEmblemas}
                    onClick={ativarEmblema}><GiSteelwingEmblem style={{fontSize: '25px'}}/></button>
                <button 
                    id='emblema3'
                    value='3' 
                    className={styles.invtrEmblemas}
                    onClick={ativarEmblema}><GiBatwingEmblem style={{fontSize: '25px'}}/></button>
            </div>
        </div>
    )
}