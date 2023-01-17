import styles from "./studyTypeBar.module.scss";

const StudyTypeBar = ()=>{
  const studyName = ["전체","언어","자격증","취/창업","취미","프로젝트"];
  return(
    <div className={styles.studyTypeBar}>
      {
      studyName.map(name=>{
        return(
          <div className={styles.studyType} key={studyName.indexOf(name)}>{name}</div>
        )
      })  
      }
    </div>
  )
}
export default StudyTypeBar;