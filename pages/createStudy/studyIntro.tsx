import styles from '../../styles/createStudy/studyIntro.module.scss';
import Link from 'next/link';
import {AddQuestion, InputBox, InputQna, InputSpace} from '@/components/inputBox';
import { introStepContent } from '@/components/inputBox/content';
import { ReactElement, useCallback, useRef, useState } from 'react';
import { WidthButton } from '@/components/widthButton';
import TopNavigation from '@/components/topNavigation';
import { GoBackWarning } from '@/components/msgBox';
export interface QnaType{
  id:number,
  content:string
}
export default function StudyIntro() {
 const [intro,setIntro] = useState("");
 const [qnaList,setQnaList] = useState<QnaType[]>([
  {
    id:1,
    content : ""
  },
  {
    id:2,
    content : ""
  }
 ]);
 const [qnaCount,setQnaCount] = useState(2);
 const addQnaHandler = ()=>{
  const newQna:QnaType = {id:qnaCount+1,content:""};
  setQnaList([...qnaList,newQna])
  setQnaCount(qnaCount+1);
 }
 return(
  <>
  <div className={styles.topProgressBar}></div>
  <TopNavigation title={"스터디 개설 (3/3)"} backSpace={true} rightIcon={"box"} backgroundStyle={0}></TopNavigation>
  <main className={styles.main}>
    {introStepContent.map((content)=>{
      switch(content.number){
        case 1:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={intro} setText={setIntro}/>
                <></>
            </InputBox>
          )
        case 2:
            return(
              <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                {
                  qnaList.map(
                    qna=>
                   {
                    return(
                      <InputQna key={qna.id} id={qna.id} qnaList={qnaList} setQna={setQnaList}/>  
                    )
                   }
                  )
                }
                <div onClick={()=>addQnaHandler()}>
                  <AddQuestion/>
                </div>
              </InputBox>
            )
          case 3:
            return(
              <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}><></><></></InputBox>
            )
      }
    })}
  </main>
  <Link href="/myStudy"><WidthButton color="blue" buttonText ="개설하기"/></Link>
  <GoBackWarning/>
  </>
 )
}