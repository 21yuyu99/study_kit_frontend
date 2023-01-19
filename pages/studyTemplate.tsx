import styles from '../styles/studyTemplate.module.scss';
import { IoIosArrowBack } from 'react-icons/Io';
import { BsPlusLg } from 'react-icons/Bs';
import { BiBox } from 'react-icons/Bi';
import StudyTypeBar from '@/components/studyTypeBar';
import Template from '@/components/template';
export default function studyTemplate(){
 return(
  <>
  <nav className={styles.top}>
      <div className={styles.back}><IoIosArrowBack/></div>
      <div className={styles.topTitle}>스터디 개설 (1/3)</div>
      <div className={styles.box}><BiBox/></div>
  </nav>
  <main className={styles.main}>
    <div className={styles.banner}>
      <div className={styles.bannerText}>
      <div className={styles.bannerTitle}>
          <h3>나에게 맞는 템플릿을 고르고</h3><h3>첫 스터디를 운영해 보세요 ✏️</h3>
        </div>
      </div>
    </div>
    <StudyTypeBar/>
    <Template/>
    <Template/>
    <div className={styles.createTemplate}>
      <div className={styles.createTemplateButton}><BsPlusLg size="10"/></div>
      <div className={styles.createTemplateText}>
        <div className={styles.createTemplateTitle}>
          <h3>새 템플릿 제안하기</h3>
        </div>
        <p>다른 사람에게 알리고 싶은 꿀팁이나 노하우가 있나요?</p>
        <p>스터디키트 팀에게 새로운 스터디 템플릿을 제안해주세요!</p>
      </div>
    </div>
  </main>
  </>
 )
}