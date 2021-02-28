import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

import CompletedChallenges from './CompletedChallenges';
import styles from '../styles/components/ProfileCard.module.css';

function ProfileCard() {
    const { currentLevel } = useContext(UserContext);

    return(
        <div>
            <div className={styles.profileCard}>
                <img src="https://github.com/heyset.png" alt="Matheus Inacio"/>
                <div>
                    <h2>Matheus Inacio</h2>
                    <span><img src="icons/level.svg" alt="icone seta verde apontando para cima"/> Nível {currentLevel}</span>
                </div>
            </div>
            <CompletedChallenges />
        </div>
    );
}

export default ProfileCard;
