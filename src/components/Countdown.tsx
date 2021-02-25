import { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

function CountdownButton(props:{hasChallenge:boolean, isActive: boolean, onClick?: () => void}) {
    const { hasChallenge, isActive, onClick } = props;

    const CloseIcon = () => <svg width="14" height="14" className={styles.closeIcon} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#666666"/></svg>;

    if(hasChallenge) {
        return (
            <button disabled>
                Ciclo concluído <img src="icons/check_circle.svg" />
            </button>
        )
    }

    if(isActive) {
        return (
            <button className={styles.stopCountdownButton} onClick={onClick} >
                Abandonar o ciclo <CloseIcon />
            </button>
        );
    }

    if(!isActive) {
        return (
            <button className={styles.startCountdownButton} onClick={onClick} >
                Iniciar um ciclo <img src="icons/play.svg" />
            </button>
        )
    }
}

function Countdown() {
    const { hasChallenge, isActive, minutes, seconds, startCountdown, resetCountdown } = useContext(CountdownContext);
    
    const minutesDigits = minutes.toString().padStart(2, '0').split('');
    const secondsDigits = seconds.toString().padStart(2, '0').split('');

    return(
        <div className={styles.countdown}>
            <div>
                <span>
                    <h1>{minutesDigits[0]}</h1>
                    <hr />
                    <h1>{minutesDigits[1]}</h1>
                </span>
                <p>:</p>
                <span>
                    <h1>{secondsDigits[0]}</h1>
                    <hr />
                    <h1>{secondsDigits[1]}</h1>
                </span>
            </div>

            <CountdownButton
                hasChallenge={hasChallenge}
                isActive={isActive}
                onClick={isActive ? resetCountdown : startCountdown}
            />
        </div>
    );
}

export default Countdown;