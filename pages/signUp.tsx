import styles from '@/styles/signUp.module.scss';
import Link from 'next/link';
import {InputBox, InputSpace} from '@/components/signUp/index';
import { signUpStepContent } from '@/components/signUp/content';
import { useState } from 'react';
import { WidthButton } from '@/components/widthButton';
import TopNavigation from '@/components/topNavigation';
import { WarningBox, WarningMsg } from '@/components/Warning';

export default function SignUp() {
 const [id,setId] = useState("");
 const [pwd,setPwd] = useState("");
 const [verifyPwd,setverifyPwd] = useState("");
 const [phoneNum,setPhoneNum] = useState("");
 const [authNum,setauthNum] = useState("");
 const [nickName,setNickName] = useState("");
 const [essentialCheck,setEssential]= useState(true);
 const [warningStatus,setWarning] = useState(false);
 return(
  <>
  <TopNavigation title={"회원가입"} backSpace={true} rightIcon={"null"}></TopNavigation>
  <main className={styles.main}>
    {signUpStepContent.map((content)=>{
      switch(content.number){
        case 1:
          return(
            <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
              <InputSpace index = {1} text={id} setText={setId} buttonName={"중복확인"}/>
              {(id===""&&essentialCheck===false)?(
                  <WarningMsg msg="중복확인을 진행해주세요"/>
                ):<></>}
            </InputBox>
          )
        case 2:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace index = {2} text={pwd} setText={setPwd} buttonName={''} />
                <InputSpace index = {2} text={verifyPwd} setText={setverifyPwd} buttonName={''}/>
              </InputBox>
            )
        case 3:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace index = {3} text={phoneNum} setText={setPhoneNum} buttonName={"문자보내기"}/>
                <InputSpace index = {3} text={authNum} setText={setauthNum} buttonName={"인증하기"}/>
              </InputBox>
            )
        case 4:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace index = {4} text={nickName} setText={setNickName} buttonName={"중복확인"}/>
                {(id===""&&essentialCheck===false)?(
                  <WarningMsg msg="중복확인을 진행해주세요"/>
                ):<></>}
              </InputBox>
            )
        default :
          return(
            <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace index = {1} text={id} setText={setId} buttonName={"인증하기"}/>
                <></>
            </InputBox>
          )
      }
    })}
      <div className={styles.bottomContainer}>
        <div className={styles.linkToSignIn}>
          <p>이미 회원이신가요? <Link href=''>로그인</Link></p>
        </div>
        {(id===""||id.length<3||pwd===""||verifyPwd===""||phoneNum===""||authNum===""||nickName==="")?
          (
            <>
            <WarningBox message="모든 항목을 입력해주세요" status= {warningStatus} setStatus={setWarning}/>
            <span className = {styles.grayButtonWrapper} onClick={()=>{setEssential(false);setWarning(true)}}><WidthButton color="gray" buttonText ="회원가입하기"/></span>
            </>)
            :<Link className = {styles.blueButtonWrapper} href="/newStudy"><WidthButton color="blue" buttonText ="회원가입하기"/></Link>
          }
    </div>
  </main>
  </>
 )
}