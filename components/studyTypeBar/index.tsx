import styles from "./studyTypeBar.module.scss";
import {useReducer, useState} from 'react';
import StudyName from "@/types/studyName";
import { useRouter } from "next/router";
import Link from "next/link";
import Template from "../template";

const StudyTypeBar = ()=>{
  const router = useRouter();
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
    {text:"IT/개발",
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
  const viewTemplate = (inx:number, text:string) => {
    switch(text){
      case "언어":
        return(
          <Link key={inx} href="/createStudy/detailStep?type=language"><Template type="언어"/></Link>
        )
      case "자격증":
        return(
          <Link href="/createStudy/detailStep?type=license"><Template type="자격증"/></Link>
        )
      case "취/창업":
        return(
          <Link href="/createStudy/detailStep?type=job"><Template type="취/창업"/></Link>
        )
      case "IT/개발":
        return(
          <Link href="/createStudy/detailStep?type=it"><Template type="IT/개발"/></Link>
        )
      case "기타":
        return(
          <Link href="/createStudy/detailStep?type=etc"><Template type="기타"/></Link>
        )
      default:
        return(
          <>
          <Link href="/createStudy/detailStep?type=language"><Template type="언어"/></Link>
          <Link href="/createStudy/detailStep?type=license"><Template type="자격증"/></Link>
          <Link href="/createStudy/detailStep?type=job"><Template type="취/창업"/></Link>
          <Link href="/createStudy/detailStep?type=it"><Template type="IT/개발"/></Link>
          <Link href="/createStudy/detailStep?type=etc"><Template type="기타"/></Link>
          </>
        )
    }
  }
  return(
    <>
    <div className={styles.studyTypeBar}>
          {
          studyName.map(name=>{
            return(
              <div key={studyName.indexOf(name)} className={name.isSelected?`${styles.studyType} ${styles.selected}`:`${styles.studyType} ${styles.notSelected}`} onClick={()=>onClickHandler({name})}>{name.text}</div>
            )
          })  
          }
        </div>
        {
            router.pathname==="/createStudy/selectTemplate"&&studyName.map(
              name=>name.isSelected===true?viewTemplate(studyName.indexOf(name),name.text):""
            )
          }
    </>
  )
}
export default StudyTypeBar;