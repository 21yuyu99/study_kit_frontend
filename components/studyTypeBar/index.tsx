import styles from "./studyTypeBar.module.scss";
import {useState} from 'react';
import StudyName from "@/types/studyName";

const StudyTypeBar = ()=>{
  const [studyName,setStudyName] = useState<StudyName[]>([
    {text:"전체",
    isSelected : true
    },
    {text:"언어",
    isSelected : false
    }, 
    {text:"자격증",
    isSelected : false
    }, 
    {text:"취/창업",
    isSelected : false
    }, 
    {text:"프로젝트",
    isSelected : false
    },
    {text:"기타",
    isSelected : false
    }
  ]);
  const onClickHandler=({name}:{name:StudyName})=>{
    const temp:StudyName[] =[];
    studyName.map(
      each => {
        if(each === name){
            each.isSelected = true;
        }
        else{
          each.isSelected = false;
        }
        temp.push(each);
      }
    )
    setStudyName(temp);
  }
  return(
    <div className={styles.studyTypeBar}>
      {
      studyName.map(name=>{
        return(
          <div key={studyName.indexOf(name)} className={name.isSelected?`${styles.studyType} ${styles.selected}`:`${styles.studyType} ${styles.notSelected}`} onClick={()=>onClickHandler({name})}>{name.text}</div>
        )
      })  
      }
    </div>
  )
}
export default StudyTypeBar;