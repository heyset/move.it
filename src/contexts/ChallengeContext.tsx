import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

import { UserContext } from '../contexts/UserContext';

import challenges from '../assets/challenges.json';

interface ChallengeContextInterface {
    completeChallenge: () => void;
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

    const { receiveExperience } = useContext(UserContext);

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        if(currentChallenge && Notification.permission === 'granted') {
            new Notification('Parabéns, você concluiu um ciclo! 🎉', {
                body: `Novo desafio disponível, valendo ${currentChallenge.amount} xp!`,
                icon: '/favicon.png',
            });

            new Audio('/notification.mp3').play();
        }
    }, [currentChallenge])

    function completeChallenge() {
        receiveExperience(currentChallenge.amount);
        resetChallenge();
    }

    function resetChallenge() {
        setCurrentChallenge(null);
    }

    function startNewChallenge() {
        const newChallengeIndex = Math.floor(Math.random() * challenges.length);

        setCurrentChallenge(challenges[newChallengeIndex]);
    }

    return (
        <ChallengeContext.Provider value={{
            completeChallenge,
            currentChallenge,
            resetChallenge,
            startNewChallenge,
        }}>
            {props.children}
        </ChallengeContext.Provider>
    );
}