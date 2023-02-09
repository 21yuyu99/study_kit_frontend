import styles from "./small.module.scss";

interface Props {
  typeName: string;
  currentMember : number;
  totalMember : number;
  cardTitle : string;
  cardTag : string[]|string;
  progressStatus : number;
}

const SmallStudyCard = ({typeName,currentMember,totalMember,cardTitle,cardTag,progressStatus} : Props)=>{
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
      <div className={styles.cardTopContent}>
        <div className={type}>{typeName}</div>
        <div className={styles.member}>{currentMember}/{totalMember}</div>
      </div> 
      <div className={styles.cardMainContent}>
        <div className={styles.cardTitle}>
          <h3>{cardTitle}</h3>
        </div>
        <div className={styles.cardTag}>{cardTag}</div>
        <div className={styles.progressBar}>
          <div className={progressStatus>=50 ? styles.blueBar : styles.grayBar} 
                style={{width:_width}}>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SmallStudyCard;