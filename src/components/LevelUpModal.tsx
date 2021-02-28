import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

import styles from '../styles/components/LevelUpModal.module.css';

interface ModalProps {
    closeModal: () => void;
}

function LevelUpModal(props: ModalProps) {
    const { currentLevel } = useContext(UserContext);

    return (
        <div className={styles.backdrop}>
            <div className={styles.levelUp}>
                <button onClick={props.closeModal}>
                    <img src="icons/close.svg" alt="close icon" />
                </button>

                <h1>{ currentLevel }</h1>
                <h2>Parabéns!</h2>
                <h3>Você alcançou um novo nível</h3>
            </div>
        </div>
    )
}

export default LevelUpModal;