import styles from '@/styles/signIn.module.scss';
import Link from 'next/link';
import {InputBox, InputSpaceContainer, SignInInputSpace} from '@/components/signUp/index';
import { signInStepContent } from '@/components/signUp/content';
import { useState } from 'react';
import { WidthButton } from '@/components/widthButton';
import TopNavigation from '@/components/topNavigation';
import { WarningBox, WarningMsg } from '@/components/msgBox';
import { CommonSignIn } from './api/singInUp';
import cookie from 'react-cookies';
import axios from 'axios';
import { useRouter } from 'next/router';
export default function SignIn() {
 const [id,setId] = useState("");
 const [pwd,setPwd] = useState("");
 const [essentialCheck,setEssential]= useState(true);
 const [warningStatus,setWarning] = useState(false);
 const router = useRouter();
 const onClickHandler = ()=>{
  CommonSignIn({id,pwd})
  .then(res=>{
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 30);
    cookie.save('refreshToken', res.data['data'].refreshToken, {
    path : '/',
    expires,
    // secure : true,
    // httpOnly : true
})
  axios.defaults.headers.common['Authorization'] = `Bearer ${res.data['data'].accessToken}`;
  router.push("/myStudy");
  }
    ).catch(()=>setWarning(true));
 }
 return(
  <>
  <TopNavigation title={"로그인"} backSpace={true} rightIcon={"null"}></TopNavigation>
  <main className={styles.main}>
    {signInStepContent.map((content)=>{
      switch(content.number){
        case 1:
          return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpaceContainer>
                  <SignInInputSpace type="id" text={id} setText={setId} placeholder={''}/>
                </InputSpaceContainer>
              </InputBox>
          )
        case 2:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpaceContainer>
                  <SignInInputSpace type="pw" text={pwd} setText={setPwd} placeholder={''}/>
                </InputSpaceContainer>
              </InputBox>
            )
      }
    })}
  </main>
  <div className={styles.bottomContainer}>
        <div className={styles.linkContainer}>
            <div className={styles.linkToSignIn}>
              아직 회원이 아닌가요? <Link href='/signUp'>회원가입</Link>
            </div>
            <div className={styles.linkToNewStudy}>
              <Link href='/newStudy'>먼저 둘러보기 &#62;</Link>
            </div>
          </div>
          {warningStatus===true&&(<WarningBox message="아이디 또는 비밀번호가 올바르지 않습니다" status= {warningStatus} setStatus={setWarning}/>)}
        {(id.length<3||pwd.length<8)?   
              <>
                <span className = {styles.grayButtonWrapper} onClick={()=>{setEssential(false)}}><WidthButton color="gray" buttonText ="로그인"/></span>
              </>
            :
            <span className = {styles.blueButtonWrapper} onClick={()=>onClickHandler()}><WidthButton color="blue" buttonText ="로그인"/></span>
          }
    </div>
  </>
 )
}