import { useContext } from 'react';

import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeCard.module.css';

function ChallengeCard() {
    const { completeChallenge, currentChallenge, resetChallenge } = useContext(ChallengeContext);
    const { completeCycle, resetCountdown } = useContext(CountdownContext);

    function completeChallengeHandle() {
        completeCycle();
        completeChallenge();
        resetCountdown();
    }

    function failChallengeHandle() {
        resetChallenge();
        resetCountdown();
    }


    return (
        <>
            {currentChallenge ?
                <div className={`${styles.challengeCard} ${styles.hasChallenge}`}>
                    <span>
                        <h2>Ganhe {currentChallenge.amount} xp</h2>
                        <hr/>
                    </span>
                    <span>
                        <img src={`icons/${currentChallenge.type}.svg`} alt={`icone representando um exercício para ${currentChallenge.type === 'body' ? 'o corpo' : 'os olhos'}`}/>
                        <h1>Exercite-se</h1>
                        <h3>{currentChallenge.description}</h3>
                    </span>
                    <span>
                        <button onClick={failChallengeHandle}>Falhei</button>
                        <button onClick={completeChallengeHandle}>Completei</button>
                    </span>
                </div>

                :

                <div className={`${styles.challengeCard} ${styles.noChallenge}`}>
                    <h2>
                        <span>Inicie um ciclo<br /></span>
                        <span>para receber desafios a<br /></span>
                        <span>serem completados<br /></span>
                    </h2>
                    <h3>
                        <img src="icons/level-up.svg" alt="seta verde apontando para cima com um simbolo positivo no meio" />
                        <span>Complete-os, ganhe experiência e suba de nível!</span>
                    </h3>
                </div>
            }
        </>
    );
}

export default ChallengeCard;