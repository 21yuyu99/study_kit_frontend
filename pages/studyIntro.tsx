import styles from '@/styles/studyIntro.module.scss'
import TopNavigation from '@/components/topNavigation';
import MidNav from '@/components/midNav';
import { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import Pencil from "@/public/img/pencil.svg";
import Image from 'next/image'
export default function StudyIntro(){

 return(
  <>
  <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
  <MidNav title={'스터디 소개'}/>
  <main className={styles.main}>
    <div className={styles.allBoxContainer}>
    <div className={styles.mainBox}>
      <div className={styles.mainBoxCard}>
        <div className={styles.mainBoxTitle}>스터디 목표</div>
        <div className={styles.mainBoxContent}>3개월 만에 HSK 4급 따기!</div>
      </div>
      <div className={styles.mainBoxCard}>
        <div className={styles.mainBoxTitle}>스터디 기간</div>
        <div className={styles.mainBoxContent}>2023-01-02~2023-03-02</div>
      </div>
      <div className={styles.modifyBtn}><Image src="/img/pencil.svg" alt="pencil" width={20} height={20}/>수정하기</div>
    </div>
    <div className={styles.cardContainer}>
      <div className={styles.singleCard}>
        <div className={styles.singleCardContent}>
          <div className={styles.graphWrapper}>
            <div className={styles.graph}>
              75%
            </div>
          </div>
        </div>
        <div className={styles.singleCardText}>
          스터디 진행 정도
        </div>
      </div>
      
      <div className={styles.singleCard}>
        <div className={styles.singleCardContent}>
          중국어
        </div>
        <div className={styles.singleCardText}>
          사용 언어
        </div>
      </div>
      
      <div className={styles.singleCard}>
        <div className={styles.singleCardContent}>
          기타
        </div>
        <div className={styles.singleCardText}>
          사용 도구
        </div>
      </div>
    </div>
    </div>
  </main>
  </>
 )
}