import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ChallengeContext } from './ChallengeContext';

interface CountdownContextInterface {
    completeCycle: () => void;
    cyclesCompleted: number;
    hasChallenge:boolean;
    isActive:boolean;
    minutes:number;
    seconds:number;
    startCountdown: () => void;
    resetCountdown: () => void;
    timer: number;
}

export const CountdownContext = createContext({} as CountdownContextInterface);

export function CountdownProvider(props: {children: ReactNode}) {
    const [timer, setTimer] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasChallenge, setHasChallenge] = useState(false);
    const { startNewChallenge } = useContext(ChallengeContext);
    const [cyclesCompleted, setCyclesCompleted] = useState(0);

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const completeCycle = () => {
        if(cyclesCompleted < 4) {
            setCyclesCompleted(cycles => cycles + 1);
        } else {
            setCyclesCompleted(0);
        }
    }
    
    const startCountdown = () => {
        setIsActive(true);
    }

    const resetCountdown = () => {
        setIsActive(false);
        setTimer(0.05 * 60);
        setHasChallenge(false);
    }

    useEffect(() => {
        let oneSecondLapse: NodeJS.Timeout;

        if(isActive && timer > 0) {
            oneSecondLapse = setTimeout(() => {
                setTimer(timer => timer - 1);
            }, 1000);
        } else if (!hasChallenge && timer === 0) {
            setHasChallenge(true);
            startNewChallenge();
        } else {
            clearTimeout(oneSecondLapse);
        }

        return () => clearTimeout(oneSecondLapse);
    }, [isActive, timer]);

    return (
        <CountdownContext.Provider value={{
            cyclesCompleted,
            completeCycle,
            hasChallenge,
            isActive,
            minutes,
            seconds,
            startCountdown,
            resetCountdown,
            timer,
        }}>
            {props.children}
        </CountdownContext.Provider>
    );
}