import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeProvider } from '../contexts/ChallengeContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { UserProvider } from '../contexts/UserContext';

import ChallengeCard from '../components/ChallengeCard';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import ProfileCard from '../components/ProfileCard';

import styles from '../styles/pages/Home.module.css';

interface ServerSideProps {
  level: number;
  experience: number;
  challengesCompleted: number;
}

export default function Home(props: ServerSideProps) {
  return (
    <div className={styles.app}>
      <Head>
        <title>Início - move.it</title>
      </Head>

      <UserProvider 
        currentLevel = {props.level}
        currentExperience = {props.experience}
        challengesCompleted = {props.challengesCompleted}
      >
        <ExperienceBar />

        <ChallengeProvider>
          <CountdownProvider>
            <section>
              <div>
                <ProfileCard />
                <Countdown />
              </div>
              <div>
                <ChallengeCard />
              </div>
            </section>
          </CountdownProvider>
        </ChallengeProvider>

      </UserProvider>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, experience, challengesCompleted } = ctx.req.cookies;


  const user = {
    level: parseInt(level),
    experience: parseInt(experience),
    challengesCompleted: parseInt(challengesCompleted),
  }

  return {
    props: user
  }
}