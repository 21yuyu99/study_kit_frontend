import styles from "./template.module.scss";
import { AiOutlineHeart } from 'react-icons/ai'

const Template = ()=>{
  return(
    <div className={styles.studyCard}>
      <div className={styles.rectangle}>?</div>
      <div className={styles.cardContent}>
        <div className={styles.top}>
          <div className={styles.cardType}>언어</div>
          <div className={styles.cardTag}>#문제풀이&nbsp;&nbsp;#실습</div>
        </div>
        <div className={styles.cardTitle}>
          <h3>언어 기본 템플릿</h3>
        </div>
        <p>토익/토플/오픽/외국어 등을 위한 스터디에 사용하세요</p>
        <div className={styles.like}><AiOutlineHeart/> 104</div>
      </div>
    </div>
  )
}
export default Template;