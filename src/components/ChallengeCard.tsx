import styles from '../styles/components/ChallengeCard.module.css';

function ChallengeCard() {
    const hasChallenge = false;

    return (
        <>
            {hasChallenge ?
                <div className={`${styles.challengeCard} ${styles.noChallenge}`}>
                    <h2>
                        <span>Inicieo<br /></span>
                        <span>para receber desafios a<br /></span>
                        <span>serem completados<br /></span>
                    </h2>
                    <h3>
                        <img src="icons/level-up.svg" alt="seta verde apontando para cima com um simbolo positivo no meio" />
                        <span>Complete-os, ganhe experiência e suba de nível!</span>
                    </h3>
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