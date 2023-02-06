import styles from '@/styles/signUp.module.scss';
import Link from 'next/link';
import {CheckButton, InputBox, InputSpace, InputSpaceContainer} from '@/components/signUp/index';
import { signUpStepContent } from '@/components/signUp/content';
import { useState } from 'react';
import { WidthButton } from '@/components/widthButton';
import TopNavigation from '@/components/topNavigation';
import { WarningBox, WarningMsg } from '@/components/Warning';
import { idCheckHandler, sendSms, verifySms } from './api/singUp';

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
              <InputSpaceContainer>
                <InputSpace type = "id" text={id} setText={setId}/>
                <span className={styles.checkButtonWrapper} onClick={()=>id.length>=3&&idCheckHandler(id)}>
                  <CheckButton type="id" content = {id} buttonName={"중복확인"}/>
                </span>
              </InputSpaceContainer>
              {(id===""&&essentialCheck===false)?(
                  <WarningMsg msg="중복확인을 진행해주세요"/>
                ):<></>}
            </InputBox>
          )
        case 2:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpaceContainer>
                  <InputSpace type="pw" text={pwd} setText={setPwd}/>
                </InputSpaceContainer> 
                <InputSpaceContainer>
                  <InputSpace type="pw" text={verifyPwd} setText={setverifyPwd}/>
                </InputSpaceContainer>
              </InputBox>
            )
        case 3:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                  <InputSpaceContainer>
                    <InputSpace type="phoneNum" text={phoneNum} setText={setPhoneNum}/>
                    <span className={styles.checkButtonWrapper} onClick={()=>phoneNum.length===11&&sendSms({phoneNum})}>
                      <CheckButton type="phoneNum" content = {phoneNum} buttonName={"문자보내기"}/>
                    </span>
                  </InputSpaceContainer>
                  <InputSpaceContainer>
                  <InputSpace type="authNum" text={authNum} setText={setauthNum}/>
                  <span className={styles.checkButtonWrapper} onClick={()=>phoneNum.length===11&&authNum.length===6&&verifySms({authNum,phoneNum})}>
                    <CheckButton type="authNum" content = {authNum} buttonName={"인증하기"}/>
                  </span>
                  </InputSpaceContainer>
              </InputBox>
            )
        case 4:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                 <InputSpaceContainer>
                 <InputSpace type="nickName" text={nickName} setText={setNickName}/>
                  <span className={styles.checkButtonWrapper} onClick={()=>phoneNum.length===11&&authNum.length===6?verifySms({phoneNum,authNum}):""}>
                    <CheckButton type="nickName" content = {nickName} buttonName={"중복확인"}/>
                  </span>
                  </InputSpaceContainer>
                {(id===""&&essentialCheck===false)?(
                  <WarningMsg msg="중복확인을 진행해주세요"/>
                ):<></>}
              </InputBox>
            )
      }
    })}
      <div className={styles.bottomContainer}>
        <div className={styles.linkToSignIn}>
          이미 회원이신가요? <Link href='/signIn'>로그인</Link>
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