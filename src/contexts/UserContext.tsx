import { createContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

import LevelUpModal from '../components/LevelUpModal';

interface UserContextInterface {
    completedChallenges: number;
    currentLevel: number;
    currentExperience: number;
    experienceToNextLevel: number;
    receiveExperience: (xp:number) => void;
}

interface UserProviderInterface {
    children: ReactNode,
    currentLevel: number,
    currentExperience: number,
    challengesCompleted: number,
}

export const UserContext = createContext({} as UserContextInterface);

export function UserProvider(props: UserProviderInterface) {
    const [currentLevel, setCurrentLevel] = useState(props.currentLevel ?? 1);
    const [isLevelUpModalVisible, setIsLevelUpModalVisible] = useState(false);
    const [currentExperience, setCurrentExperience] = useState(props.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(props.challengesCompleted ?? 0);

    const experienceToNextLevel = Math.round(100 * Math.pow(1.2, (currentLevel - 1)));

    useEffect(() => {
        Cookies.set('level', String(currentLevel));
        Cookies.set('experience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));

    }, [currentLevel, currentExperience, challengesCompleted])

    function closeLevelUpModal() {
        setIsLevelUpModalVisible(false);
    }

    function levelUp() {
        setCurrentLevel(level => level + 1);
        setIsLevelUpModalVisible(true);
    }

    function receiveExperience(xp: number) {
        setChallengesCompleted(completedChallenges => completedChallenges + 1);
        let finalExperience = currentExperience + xp;
        
        if(finalExperience >= experienceToNextLevel) {
            finalExperience -= experienceToNextLevel;
            levelUp();
            setCurrentExperience(finalExperience);
        } else {
            setCurrentExperience(finalExperience);
        }
    }

    return (
        <UserContext.Provider value={{
            completedChallenges: challengesCompleted,
            currentLevel,
            currentExperience,
            experienceToNextLevel,
            receiveExperience,
        }}>
            {props.children}
            {isLevelUpModalVisible && <LevelUpModal closeModal={closeLevelUpModal} />}
        </UserContext.Provider>
    );
}