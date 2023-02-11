import styles from '@/styles/studyBoard/index.module.scss'
import TopNavigation from '@/components/topNavigation';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PreviewBoard } from '@/components/studyBoard';
export default function StudyBoard(){

 return(
  <>
  <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
  <nav className={styles.navContainer}>
    <Link href='/studyIntro' className={styles.navLeft}>스터디 소개</Link>
    <Link href='/studyMember' className={styles.navCenter}>스터디원</Link>
    <Link href='/studyBoard' className={styles.navRight}>게시판</Link>
  </nav>
  <main className={styles.main}>
    <PreviewBoard title="하루 단어 50개 암기 확인" isChief={true} date="2023.01.23" views={50} comment={23} nickName="dbsekdls"/>
    <PreviewBoard title="토익 시험 일자" isChief={true} date="2023.01.23" views={50} comment={23} nickName="dbsekdls"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
  </main>
  </>
 )
}