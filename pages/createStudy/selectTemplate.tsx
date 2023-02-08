import styles from '../../styles/createStudy/selectTemplate.module.scss';
import Plus from '../../public/img/Group 7029.svg';
import StudyTypeBar from '@/components/studyTypeBar';
import Template from '@/components/template';
import Link from 'next/link';
import TopNavigation from '@/components/topNavigation';
export default function SelectTemplate(){
 return(
  <>
  <div className={styles.topProgressBar}>
    <div className={styles.left}></div>
    <div className={styles.right}></div>
  </div>
  <TopNavigation title={"스터디 개설 (1/3)"} backSpace={true} rightIcon={"box"} backgroundStyle={0}></TopNavigation>
  <main className={styles.main}>
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <div className={styles.bannerTitle}>
          <h3>나에게 맞는 템플릿을 고르고</h3><h3>첫 스터디를 운영해 보세요 👨‍💻</h3>
        </div>
      </div>
    </div>
    <StudyTypeBar/>
    <Link href="/createStudy/detailStep"><Template/></Link>
    <Template/>
    <div className={styles.createTemplate}>
      <Plus/>
      <div className={styles.createTemplateText}>
        <div className={styles.createTemplateTitle}>
          <h3>새 템플릿 제안하기</h3>
        </div>
        <p>다른 사람에게 알리고 싶은 꿀팁이나 노하우가 있나요?&nbsp;스터디키트 팀에게 새로운 스터디 템플릿을 제안해주세요!</p>
      </div>
    </div>
  </main>
  </>
 )
}