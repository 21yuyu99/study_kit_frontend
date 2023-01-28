import styles from '../../styles/home/index.module.scss';
import { AiOutlineBell } from 'react-icons/ai';
import StudyCard from '@/components/studyCard';
import BottomNavigation from '@/components/bottomNavigation';

export default function home(){
 return(
  <>
  <nav className={styles.top}>
      <div className={styles.topTitle}>스터디키트</div>
      <div className={styles.topCenterContainer}></div>
      <div className={styles.bell}><AiOutlineBell/></div>
  </nav>
  <main className={styles.main}>
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <div className={styles.bannerTitle}>
          <h3>서비스 소개</h3>
        </div>
      </div>
    </div>
    <StudyCard typeName={"언어"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"기타"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"자격증"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"취/창업"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={true} cardTag={['#문제풀이','#실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
  </main>
  <BottomNavigation location={"홈"}/>
  </>
 )
}