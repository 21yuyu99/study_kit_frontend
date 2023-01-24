import styles from '../../styles/home/index.module.scss';
import { AiOutlineBell } from 'react-icons/ai';
import StudyCard from '@/components/studyCard';
import BottomNavigation from '@/components/bottomNavigation';

export default function home(){
 return(
  <>
  <div className={styles.scrollSpace}>
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
    <StudyCard typeName={"언어"}></StudyCard>
    <StudyCard typeName={"기타"}></StudyCard>
    <StudyCard typeName={"자격증"}></StudyCard>
    <StudyCard typeName={"취/창업"}></StudyCard>
    <StudyCard typeName={"프로젝트"}></StudyCard>
  </main>
  </div>
  <BottomNavigation location={"홈"}/>
  </>
 )
}