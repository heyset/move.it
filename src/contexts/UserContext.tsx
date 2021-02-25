import { createContext, useState, ReactNode } from 'react';

interface UserContextInterface {
    completedChallenges: number;
    currentLevel: number;
    currentExperience: number;
    experienceToNextLevel: number;
    receiveExperience: (xp:number) => void;
}

export const UserContext = createContext({} as UserContextInterface);

export function UserProvider(props: { children: ReactNode }) {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [completedChallenges, setCompletedChallenges] = useState(0);

    const experienceToNextLevel = Math.round(100 * Math.pow(1.2, (currentLevel - 1)));

    function levelUp() {
        setCurrentLevel(level => level + 1);
    }

    function receiveExperience(xp: number) {
        setCompletedChallenges(completedChallenges => completedChallenges + 1);
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
            completedChallenges,
            currentLevel,
            currentExperience,
            experienceToNextLevel,
            receiveExperience,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}