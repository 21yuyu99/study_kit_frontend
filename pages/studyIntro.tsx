import styles from '@/styles/studyIntro.module.scss'
import TopNavigation from '@/components/topNavigation';
import MidNav from '@/components/midNav';
import { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head';
export default function StudyIntro(){

 return(
  <>
  <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
  <MidNav title={'스터디 소개'}/>
  <main className={styles.main}>
  </main>
  </>
 )
}