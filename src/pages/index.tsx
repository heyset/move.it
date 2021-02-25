import Head from 'next/head';

import { ChallengeProvider } from '../contexts/ChallengeContext';
import { UserProvider } from '../contexts/UserContext';

import ChallengeCard from '../components/ChallengeCard';
import Countdown from '../components/Countdown';
import CompletedChallenges from '../components/CompletedChallenges';
import ExperienceBar from '../components/ExperienceBar';
import ProfileCard from '../components/ProfileCard';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Início - move.it</title>
      </Head>

      <UserProvider>
        <ExperienceBar />
      </UserProvider>

      <section>

        <ChallengeProvider>
          <div>
            <UserProvider>
              <ProfileCard />
              <CompletedChallenges />
            </UserProvider>
            <Countdown />
          </div>
          <div>
            <ChallengeCard />
          </div>
        </ChallengeProvider>

      </section>
    </div>
  )
}