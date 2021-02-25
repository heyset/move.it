import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(UserContext);

    const experiencePercent = (Math.round(currentExperience / experienceToNextLevel * 100 * 100)/100).toString();

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>

            <div>
                <div style={{ width: `${experiencePercent}%`}} />
                <span style={{ left: `${experiencePercent}%`}} >{currentExperience}</span>
            </div>

            <span>{experienceToNextLevel}</span>
        </header>
    );
}

export default ExperienceBar;