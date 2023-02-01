import styles from '@/styles/signUp.module.scss';
import Link from 'next/link';
import {InputBox, InputSpace} from '@/components/signUp/index';
import { signUpStepContent } from '@/components/signUp/content';
import { useState } from 'react';
import { WidthButton } from '@/components/widthButton';
import TopNavigation from '@/components/topNavigation';

export default function SignUp() {
 const [id,setId] = useState("");
 const [pwd,setPwd] = useState("");
 const [Repwd,setRePwd] = useState("");
 const [phoneNum,setPhoneNum] = useState("");
 const [nickName,setNickName] = useState("");
 return(
  <>
  <TopNavigation title={"회원가입"} backSpace={true} rightIcon={"null"}></TopNavigation>
  <main className={styles.main}>
    {signUpStepContent.map((content)=>{
      switch(content.number){
        case 1:
          return(
            <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={id} setText={setId} buttonName={"중복확인"}/>
                <></>
            </InputBox>
          )
        case 2:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={pwd} setText={setPwd} buttonName={''} />
                <InputSpace text={Repwd} setText={setRePwd} buttonName={''}/>
              </InputBox>
            )
        case 3:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={phoneNum} setText={setPhoneNum} buttonName={"문자보내기"}/>
                <InputSpace text={nickName} setText={setNickName} buttonName={"인증하기"}/>
              </InputBox>
            )
        case 4:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={nickName} setText={setNickName} buttonName={"중복확인"}/>
                <></>
              </InputBox>
            )
        default :
          return(
            <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={id} setText={setId} buttonName={"인증하기"}/>
                <></>
            </InputBox>
          )
      }
    })}
    <div className={styles.linkToSignIn}>
      <p>이미 회원이신가요? <Link href=''>로그인</Link></p>
    </div>
    <Link href="/newStudy"><WidthButton color="blue" buttonText ="회원가입하기"/></Link>
  </main>
  </>
 )
}