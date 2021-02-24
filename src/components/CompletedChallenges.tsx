import styles from '../styles/components/CompletedChallenges.module.css';

function CompletedChallenges() {
    return (
        <div className={styles.completedChallenges}>
            <span>
                <h4>Desafios completos</h4>
                <h3>00</h3>
            </span>
            <hr/>
        </div>
    );
}

export default CompletedChallenges;