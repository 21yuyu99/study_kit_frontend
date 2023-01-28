import Head from 'next/head'	
import Image from 'next/image'	
import { Inter } from '@next/font/google'	
import styles from '@/styles/Home.module.scss'	

export default function Home() {	
  return (	
    <>	
      <Head>	
        <title>Study Kit</title>	
        <meta name="description" content="스터디 키트" />	
        <link rel="icon" href="/img/favicon.ico" />	
      </Head>	
      <main className={styles.main}>
        <div className={styles.banner}>
          <div>
            <div className={styles.pencil}>✏️</div>
            <div className={styles.bannerTitle}>
              <h3>스터디키트</h3>
            </div>
            <p>A to Z 떠먹여주는</p> 
            <p>스터디그룹 활동하기</p>
          </div>
        </div>
      </main>	
    </>	
  )	
}