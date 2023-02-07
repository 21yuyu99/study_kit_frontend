import styles from '@/styles/signIn.module.scss';
import Link from 'next/link';
import {InputBox, InputSpace} from '@/components/signUp/index';
import { signInStepContent } from '@/components/signUp/content';
import { useState } from 'react';
import { WidthButton } from '@/components/widthButton';
import TopNavigation from '@/components/topNavigation';
import { WarningBox, WarningMsg } from '@/components/msgBox';

export default function SignIn() {
 const [id,setId] = useState("");
 const [pwd,setPwd] = useState("");
 const [essentialCheck,setEssential]= useState(true);
 const [warningStatus,setWarning] = useState(false);
 return(
  <>
  <TopNavigation title={"로그인"} backSpace={true} rightIcon={"null"}></TopNavigation>
  <main className={styles.main}>
    {signInStepContent.map((content)=>{
      switch(content.number){
        case 1:
          return(
            <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
              <InputSpace type="id" text={id} setText={setId} placeholder={''}/>
              <></>
            </InputBox>
          )
        case 2:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace type="pw" text={pwd} setText={setPwd} placeholder={''}/>
                <></>
              </InputBox>
            )
      }
    })}
      <div className={styles.bottomContainer}>
        <div className={styles.linkContainer}>
            <div className={styles.linkToSignIn}>
              아직 회원이 아닌가요? <Link href='/signUp'>회원가입</Link>
            </div>
            <div className={styles.linkToNewStudy}>
              <Link href='/newStudy'>먼저 둘러보기 &#62;</Link>
            </div>
          </div>
        {(id.length<3||pwd.length<8)?      
            <span className = {styles.grayButtonWrapper} onClick={()=>{setEssential(false);setWarning(true)}}><WidthButton color="gray" buttonText ="로그인"/></span>
            :
            <Link className = {styles.blueButtonWrapper} href="/newStudy"><WidthButton color="blue" buttonText ="로그인"/></Link>
          }
    </div>
  </main>
  </>
 )
}