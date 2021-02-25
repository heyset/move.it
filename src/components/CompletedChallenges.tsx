import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

import styles from '../styles/components/CompletedChallenges.module.css';

function CompletedChallenges() {
    const { completedChallenges } = useContext(UserContext);

    return (
        <div className={styles.completedChallenges}>
            <span>
                <h4>Desafios completos</h4>
                <h3>{completedChallenges}</h3>
            </span>
            <hr/>
        </div>
    );
}

export default CompletedChallenges;