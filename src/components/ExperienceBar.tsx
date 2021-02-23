import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>

            <div>
                <div style={{ width: '66.6667%' }} />
                <span style={{ left: '66.6667%'}} >400 xp</span>
            </div>

            <span>600 xp</span>
        </header>
    );
}

export default ExperienceBar;