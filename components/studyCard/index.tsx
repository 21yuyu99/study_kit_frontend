import styles from "./studyCard.module.scss";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { ReactNode } from "react";
import styled from "styled-components";

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
  
  const ProgressBar = styled.div`
  position: relative;
  display: inline-block;
  background: #DCDCDC;
  height: 7px;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;

  &::before {
  content: "";
  position: absolute;
  height: 100%;
  width: ${progressStatus}%;
  border-radius: 6px;
  background: ${progressStatus>=50 ? 'Dodgerblue' : 'gray'};
  }
`;
  return(
    <div className={styles.studyCard}>
      <div className={type}>{typeName}</div>
      <div className={styles.cardTag}>{cardTag}</div>
        {starStatus===true?
        (<div className={styles.star_true}><AiFillStar size={27}/></div>) 
        :
          (<div className={styles.star_false}><AiOutlineStar size={27}/></div>)
        }
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>{cardTitle}</h3>
        </div>
        <p>{cardPeriod}</p>
        <ProgressBar></ProgressBar>
      </div>
    </div>
  )
}
export default StudyCard;