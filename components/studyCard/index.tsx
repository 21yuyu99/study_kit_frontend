import styles from "./studyCard.module.scss";
import { AiFillStar } from 'react-icons/ai';

const StudyCard = ()=>{
  return(
    <div className={styles.studyCard}>
      <div className={styles.cardType}>언어</div>
      <div className={styles.cardTag}>#문제풀이</div>
      <div className={styles.star}><AiFillStar size={27}/></div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>오픽 자격증 따기</h3>
        </div>
        <p>12월 18일~ (27일째 스터디 중)</p>
        <div className={styles.progressBar}></div>
      </div>
    </div>
  )
}
export default StudyCard;