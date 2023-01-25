import styles from '../../styles/createStudy/studyIntro.module.scss';
import { IoIosArrowBack } from 'react-icons/Io';
import { BiBox } from 'react-icons/Bi';
import Link from 'next/link';
import {AddQuestion, InputBox, InputSpace} from '@/components/createStudy/inputBox';
import { introStepContent } from '@/components/createStudy/inputBox/content';
import { useState } from 'react';
import { WidthButton } from '@/components/widthButton';

export default function StudyIntro() {
 const [intro,setIntro] = useState("");
 const [qna,setQna] = useState("");
 return(
  <>
  <div className={styles.topProgressBar}></div>
  <nav className={styles.top}>
      <div className={styles.back}><Link href="/createStudy/detailStep"><IoIosArrowBack/></Link></div>
      <div className={styles.topTitle}>스터디 소개 (3/3)</div>
      <div className={styles.box}><BiBox/></div>
  </nav>
  <main className={styles.main}>
    {introStepContent.map((content)=>{
      switch(content.number){
        case 1:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={intro} setText={setIntro}/>
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
              <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}></InputBox>
            )
        default :
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                  <InputSpace text={intro} setText={setIntro}/>
            </InputBox>
          )
      }
    })}
    <Link href="/home"><WidthButton color="blue" buttonText ="개설하기"/></Link>
  </main>
  </>
 )
}