import { createContext, useState, ReactNode } from 'react';

interface UserContextInterface {
    completedChallenges: number;
    currentLevel: number;
    currentExperience: number;
    experienceToNextLevel: number;
}

export const UserContext = createContext({} as UserContextInterface);

export function UserProvider(props: { children: ReactNode }) {
    const [currentLevel, setCurrentLevel] = useState(4);
    const [currentExperience, setCurrentExperience] = useState(36);
    const [completedChallenges, setCompletedChallenges] = useState(0);

    const experienceToNextLevel = Math.round(100 * Math.pow(1.2, (currentLevel - 1)));

    return (
        <UserContext.Provider value={{
            completedChallenges,
            currentLevel,
            currentExperience,
            experienceToNextLevel,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}