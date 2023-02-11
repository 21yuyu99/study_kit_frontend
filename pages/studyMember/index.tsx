import styles from '@/styles/studyMember/index.module.scss'
import TopNavigation from '@/components/topNavigation';
import MidNav from '@/components/midNav';
import PlusMan from '@/public/img/plusMan.svg'
import { Member } from '@/components/member';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function StudyMember(){
  let reqNum = 3 //0
  return(
  <>
  <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
  <MidNav title={'스터디원'}/>
  <main className={styles.main}>
   <Link href='/studyMember/management' className={styles.buttonContainer}>
      <PlusMan/>
      <div className={styles.buttonText}>
        <div className={styles.buttonTitle}>
          {reqNum===0 ? <h3>대기중인 가입 신청이 없습니다</h3> 
          : <div className={styles.title}>
              <h3>대기중인 가입 신청</h3>
              <div className={styles.reqNum}>{reqNum}</div>
            </div>}
        </div>
        <p>가입 신청 관리 바로가기</p>
      </div>
    </Link>
    <Member nickName={'가나다'} level={1} isHead={true}/>
    <Member nickName={'가나다'} level={1} isHead={false}/>
    <Member nickName={'가나다'} level={1} isHead={false}/>
    <Member nickName={'가나다'} level={1} isHead={false}/>
    <Member nickName={'가나다'} level={1} isHead={false}/>
    <Member nickName={'가나다'} level={1} isHead={false}/>
    <Member nickName={'가나다'} level={1} isHead={false}/>
  </main>
  </>
  )
}