import styles from '../styles/components/ProfileCard.module.css';

function ProfileCard() {
    return(
        <div className={styles.profileCard}>
            <img src="https://github.com/heyset.png" alt="Matheus Inacio"/>
            <div>
                <h2>Matheus Inacio</h2>
                <span><img src="icons/level.svg" alt="icone seta verde apontando para cima"/> Level 1</span>
            </div>
        </div>
    );
}

export default ProfileCard;
