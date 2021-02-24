import { useEffect, useState } from 'react';
import { start } from 'repl';

import styles from '../styles/components/Countdown.module.css';

function Countdown() {
    const [timer, setTimer] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const minutesDigits = minutes.toString().padStart(2, '0').split('');
    const secondsDigits = seconds.toString().padStart(2, '0').split('');

    const startCountdown = () => {
        setIsActive(true);
    }

    useEffect(() => {
        let oneSecondLapse: NodeJS.Timeout;

        if(isActive && timer > 0) {
            oneSecondLapse = setTimeout(() => {
                setTimer(timer => timer - 1);
            }, 1000);
        }

        return () => clearTimeout(oneSecondLapse);
    }, [isActive, timer]);

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
            <button onClick={startCountdown}>
                Iniciar um ciclo <img src="icons/play.svg" />
            </button>
        </div>
    );
}

export default Countdown;