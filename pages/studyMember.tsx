import styles from '@/styles/studyMember.module.scss'
import TopNavigation from '@/components/topNavigation';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function StudyMember(){

 return(
  <>
  <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
  <nav className={styles.navContainer}>
    <Link href='/studyIntro' className={styles.navLeft}>스터디 소개</Link>
    <Link href='/studyMember' className={styles.navCenter}>스터디원</Link>
    <Link href='/studyBoard' className={styles.navRight}>게시판</Link>
  </nav>
  <main className={styles.main}>
  </main>
  </>
 )
}