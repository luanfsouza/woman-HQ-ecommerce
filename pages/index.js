import Head from 'next/head'
import Image from 'next/image'
import About from '../src/components/about/About'
import Banner from '../src/components/Banner'
import HomePage from '../src/components/Home'
import Ilustrators from '../src/components/ilustrators/Illustrators'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <HomePage/>
       <About/>
       <Ilustrators/>
      </main>
    </div>
  )
}