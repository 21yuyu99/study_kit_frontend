import Head from 'next/head'	
import Image from 'next/image'	
import { Inter } from '@next/font/google'	
import styles from '@/styles/Home.module.css'	
import Link from 'next/link'

export default function Home() {	
  return (	
    <>	
      <Head>	
        <title>Study Kit</title>	
        <meta name="description" content="스터디 키트" />	
        <link rel="icon" href="/img/favicon.ico" />	
      </Head>	
      <main>	
        메인 페이지	
      </main>	
      {/* <Link href="/auth/kakao">카카오</Link>    */}
      <Link href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
          process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`}>카카오</Link>
    </>	
  )	
}