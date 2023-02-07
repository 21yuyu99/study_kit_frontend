import styles from '../styles/myStudy.module.scss';
import SmallStudyCard from '@/components/studyCard/small';
import StudyCard from '@/components/studyCard';
import TopNavigation from '@/components/topNavigation';
import BottomNavigation from '@/components/bottomNavigation';
import { useState } from 'react';
import Plus from 'public/img/plus.svg';
import Link from 'next/link'
import Head from 'next/head';
export default function myStudy(){
  let numStudy = 0 //2

 return(
  <>
  <TopNavigation title={"스터디키트"} backSpace={false} rightIcon={"bell"}></TopNavigation>
  <main className={styles.main}>
    <div className={styles.banner}>
      <div className={styles.bannerText}>
      <div className={styles.bannerTitle}>
          <h3>원하는 스터디가 없다면?</h3><h3>스터디장이 될 차례!</h3>
        </div>
       <p><Link href="/createStudy/selectTemplate">스터디키트가 떠먹여주는 스터디 만들기 &gt;</Link></p>
      </div>
      <div className={styles.pencil}>✏️</div>
    </div>
    <div className={styles.subTitle}>
      <h3>참여 중인 스터디</h3>
      <div className={styles.numStudy}><h3>{numStudy}</h3></div>
    </div>
    {numStudy===0 ? 
      <Link href="/newStudy" className={styles.a}>
        <div className={styles.createStudyContainer}>
          <Plus/>
          <div className={styles.createStudyText}>
            <div className={styles.createStudyTitle}>
              <h3>나에게 맞는 스터디 찾으러 가기</h3>
            </div>
            <p>현재 참여중인 스터디가 없습니다</p>
          </div>
        </div>
      </Link> 
      :
      <> 
      <StudyCard typeName={"언어"} starStatus={true} cardTag={['#문제풀이',' #실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
      <StudyCard typeName={"자격증"} starStatus={false}cardTag={['#문제풀이',' #실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={40}></StudyCard>
      </>
    }
    <div className={styles.subTitle}>
      <h3>이런 스터디는 어떤가요?</h3>
    </div>
    <div className={styles.studyCard}>
      <SmallStudyCard typeName={'언어'} currentMember={2} totalMember={5} cardTitle={'오픽 자격증 따기'} cardTag={'#실습 #문제풀이'} progressStatus={80}/>
      <SmallStudyCard typeName={'언어'} currentMember={2} totalMember={5} cardTitle={'오픽 자격증 따기'} cardTag={'#실습 #문제풀이'} progressStatus={80}/>
      <SmallStudyCard typeName={'언어'} currentMember={2} totalMember={5} cardTitle={'오픽 자격증 따기'} cardTag={'#실습 #문제풀이'} progressStatus={80}/>
      <SmallStudyCard typeName={'언어'} currentMember={2} totalMember={5} cardTitle={'오픽 자격증 따기'} cardTag={'#실습 #문제풀이'} progressStatus={80}/>
    </div>
  </main>
  <BottomNavigation location={"홈"}/>
  </>
 )
}