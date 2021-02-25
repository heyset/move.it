import { createContext, useState, ReactNode } from 'react';

import challenges from '../assets/challenges.json';

interface ChallengeContextInterface {
    currentChallenge: {
        type: string,
        description: string,
        amount: number,
    };
    resetChallenge: () => void;
    startNewChallenge: () => void;
}

export const ChallengeContext = createContext({} as ChallengeContextInterface);


export function ChallengeProvider(props:{children: ReactNode}) {
    const [currentChallenge, setCurrentChallenge] = useState(null);

    function resetChallenge() {
        setCurrentChallenge(null);
    }

    function startNewChallenge() {
        const newChallengeIndex = Math.floor(Math.random() * challenges.length);

        setCurrentChallenge(challenges[newChallengeIndex]);
    }

    return (
        <ChallengeContext.Provider value={{
            currentChallenge,
            resetChallenge,
            startNewChallenge,
        }}>
            {props.children}
        </ChallengeContext.Provider>
    );
}