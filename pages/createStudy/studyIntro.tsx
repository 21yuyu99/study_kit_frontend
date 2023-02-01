import styles from '../../styles/createStudy/studyIntro.module.scss';
import Link from 'next/link';
import {AddQuestion, InputBox, InputSpace} from '@/components/inputBox';
import { introStepContent } from '@/components/inputBox/content';
import { useState } from 'react';
import { WidthButton } from '@/components/widthButton';
import TopNavigation from '@/components/topNavigation';

export default function StudyIntro() {
 const [intro,setIntro] = useState("");
 const [qna,setQna] = useState("");
 return(
  <>
  <div className={styles.topProgressBar}></div>
  <TopNavigation title={"스터디 개설 (3/3)"} backSpace={true} rightIcon={"box"}></TopNavigation>
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
                <InputSpace text={qna} setText={setQna}/>
                <InputSpace text={qna} setText={setQna}/>
                <AddQuestion/>
              </InputBox>
            )
          case 3:
            return(
              <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}><></><></></InputBox>
            )
        default :
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                  <InputSpace text={intro} setText={setIntro}/>
                  <></>
            </InputBox>
          )
      }
    })}
  </main>
  <Link href="/home"><WidthButton color="blue" buttonText ="개설하기"/></Link>
  </>
 )
}