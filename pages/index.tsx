import Head from 'next/head'	
import styles from '@/styles/Home.module.scss'	
import Kakao from '@/public/img/kakao.svg'
import Google from '@/public/img/google.svg'
import Link from 'next/link'

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
        <div className={styles.linkToSignIn}>
          <p>이미 회원이신가요? <Link href=''>로그인</Link></p>
        </div>
        <div className={styles.signUp}>
          <Link href=''><div className={styles.studyKit}><h3>1분만에 회원가입하기</h3></div></Link>
          <Link href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
          process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`}><div className={styles.kakao}><Kakao/><h3>카카오로 바로 시작하기</h3></div></Link>
          <Link href=''><div className={styles.google}><Google/><h3>구글로 바로 시작하기</h3></div></Link>
        </div>	
      </main>
      </>
  )	
}