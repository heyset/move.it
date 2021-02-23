import Head from 'next/head';

import ExperienceBar from '../components/ExperienceBar';
import ProfileCard from '../components/ProfileCard';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Início - move.it</title>
      </Head>

      <ExperienceBar />

      <section>

        <div>
          <ProfileCard />
        </div>

        <div>
          <h1>Inicie um ciclo</h1>
        </div>

      </section>
    </div>
  )
}