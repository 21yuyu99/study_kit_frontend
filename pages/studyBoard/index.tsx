import styles from '@/styles/studyBoard/index.module.scss'
import TopNavigation from '@/components/topNavigation';
import MidNav from '@/components/midNav';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PreviewBoard } from '@/components/studyBoard';
export default function StudyBoard(){

 return(
  <>
  <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
  <MidNav title={'게시판'}/>
  <main className={styles.main}>
    <PreviewBoard title="하루 단어 50개 암기 확인" isChief={true} date="2023.01.23" views={50} comment={23} nickName="dbsekdls"/>
    <PreviewBoard title="토익 시험 일자" isChief={true} date="2023.01.23" views={50} comment={23} nickName="dbsekdls"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
  </main>
  </>
 )
}