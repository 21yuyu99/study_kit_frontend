import styles from "./studyCard.module.scss";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  typeName: ReactNode;
  starStatus : boolean;
  cardTag : string[]|string;
  cardTitle : string;
  cardPeriod : string;
  progressStatus : number;
}

const StudyCard = ({typeName,starStatus,cardTag,cardTitle,cardPeriod,progressStatus,} : Props)=>{
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
  let _width = progressStatus + '%';
  return(
    <div className={styles.studyCard}>
      <div className={type}>{typeName}</div>
      <div className={styles.cardTag}>{cardTag}</div>
        {starStatus===true?
        (<div className={styles.star_true}><AiFillStar size={27}/></div>) 
        :
          (<div className={styles.star_false}><AiOutlineStar size={27}/></div>)
        }
      <Link href='/studyIntro' className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>{cardTitle}</h3>
        </div>
        <p>{cardPeriod}</p>
        <div className={styles.progressBar}>
          <div className={progressStatus>=50 ? styles.blueBar : styles.grayBar} 
                style={{width:_width}}>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default StudyCard;