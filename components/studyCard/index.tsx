import styles from "./studyCard.module.scss";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ReactNode } from "react";

interface Props {
  typeName: ReactNode;
  starStatus : boolean;
  cardTag : string[]|string;
  cardTitle : string;
  cardPeriod : string;
  progressStatus : number;
}

const StudyCard = ({typeName,starStatus,cardTag,cardTitle,cardPeriod,progressStatus} : Props)=>{
  let type
  if (typeName=="언어" || typeName=="기타") {
    type = styles.languageOther
  }
  else if (typeName=="자격증") {
    type = styles.certificate
  }
  else if (typeName=="취/창업") {
    type = styles.employment
  }
  else if (typeName=="프로젝트") {
    type = styles.project
  }
  return(
    <div className={styles.studyCard}>
      <div className={type}>{typeName}</div>
      <div className={styles.cardTag}>#문제풀이&nbsp;&nbsp;#실습</div>
        {starStatus===true?
        (<div className={styles.star_true}><AiFillStar size={27}/></div>) 
        :
          (<div className={styles.star_false}><AiOutlineStar size={27}/></div>)
        }
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