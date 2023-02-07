import styles from '@/styles/signUp.module.scss';
import Link from 'next/link';
import {CheckButton, InputBox, InputSpace, InputSpaceContainer, SignUpInputSpace} from '@/components/signUp/index';
import { signUpStepContent } from '@/components/signUp/content';
import { useState } from 'react';
import { WidthButton } from '@/components/widthButton';
import TopNavigation from '@/components/topNavigation';
import { WarningBox, WarningMsg, IsOkMsg } from '@/components/Warning';
import { idCheckHandler, nicknameCheckHandler, sendSms, signUp, verifySms } from './api/singUp';
import { essentialCheckType } from '@/types/signUp';

export default function SignUp() {
 const [id,setId] = useState("");
 const [pwd,setPwd] = useState("");
 const [verifyPwd,setverifyPwd] = useState("");
 const [phoneNum,setPhoneNum] = useState("");
 const [authNum,setauthNum] = useState("");
 const [nickName,setNickName] = useState("");
 const [buttonStatus,setButton]= useState(true);
 const [warningStatus,setWarning] = useState(false);
 const [essentialCheck,setEssential]= useState<essentialCheckType[]>(
  [
    {
      type : 'id',
      isChecked : false, // 버튼을 눌러 확인했나
      isVerified : false, 
    },
    {
      type: 'pw',
      isChecked : true, //필요 없음
      isVerified : false,
    },
    {
      type : 'phoneNum',
      isChecked : false,
      isVerified : false,
    },
    {
      type : 'authNum',
      isChecked : false,
      isVerified : false,
    },
    {
      type : 'nickName',
      isChecked : false,
      isVerified : false
    }
  ]
 )
  const onClickHandler = (type:string)=>{
  switch(type){
    case "id":
      if(id.length>=3){
        const verifyId = idCheckHandler(id);
        verifyId.then(data=>data['data']['data']==="이 아이디는 사용 가능합니다!"?
        setEssential(
              essentialCheck.map(
                x =>
                x.type==="id"?{type:'id',isChecked : true,isVerified : true}:x
              )
        )
        :
        setEssential(
          essentialCheck.map(
            x =>
            x.type==="id"?{type:'id',isChecked : true,isVerified : false}:x
          )
    )
        )
        verifyId.catch(()=>alert("error"));
      }
    case "phoneNum":
      if(phoneNum.length===11){
        const sms = sendSms({phoneNum});
        sms.then(data=>
          data.status===200?
          setEssential(
            essentialCheck.map(
              x =>
              x.type==="phoneNum"?{...x,isChecked : true, isVerified : true}:x
            )
          ):""
          );
      sms.catch(()=>alert("문자 보내기 실패"))
      } 
      return true
    case "authNum":
      if(authNum.length===6&&essentialCheck[2]['isVerified']===true){
        const verify = verifySms({authNum,phoneNum});
        verify.then(()=>
          setEssential(
            essentialCheck.map(
              x =>
              x.type==="authNum"?{...x,isChecked : true, isVerified : true}:x
            )
          )
          );
        verify.catch(()=>
        setEssential(
          essentialCheck.map(
            x =>
            x.type==="authNum"?{...x,isChecked : true, isVerified : false}:x
          )
        )
        );
      }
      return true
    case "nickName":
      if(nickName.length>=1){
        const check = nicknameCheckHandler(nickName);
        check.then((data)=>data.data['data']==="이미 사용중인 닉네임입니다."?
        setEssential(
          essentialCheck.map(
            x =>
            x.type==="nickName"?{...x,isChecked : true, isVerified : false}:x
          )
        ):
        setEssential(
          essentialCheck.map(
            x =>
            x.type==="nickName"?{...x,isChecked : true, isVerified : true}:x
          )
        )
        );
        check.catch(()=>alert("닉네임 중복 확인 실패"));
      }
  }
 }

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
                <SignUpInputSpace placeholder="" type = "id" text={id} setText={setId} essentialCheck={essentialCheck} setEssential={setEssential} compareText=""/>
                <span className={styles.checkButtonWrapper} onClick={()=>onClickHandler("id")}>
                  <CheckButton type="id" content = {id} buttonName={"중복확인"}/>
                </span>
              </InputSpaceContainer>
              {
                (id.length>=3&&essentialCheck[0]['isChecked']===true&&essentialCheck[0]['isVerified']===false?(<WarningMsg msg="이미 사용중인 아이디입니다."/>):<></>
                )
              }
             {
                (id.length>=3&&essentialCheck[0]['isChecked']===true&&essentialCheck[0]['isVerified']===true?(<IsOkMsg msg="사용 가능한 아이디입니다."/>):<></>
                )
              }
              {(essentialCheck[0]['isChecked']===false&&buttonStatus===false)?(
                  <WarningMsg msg="중복확인을 진행해주세요"/>
                ):<></>}
            </InputBox>
          )
        case 2:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpaceContainer>
                <SignUpInputSpace placeholder="" type = "pw" text={pwd} setText={setPwd} essentialCheck={essentialCheck} setEssential={setEssential} compareText={verifyPwd}/>
                </InputSpaceContainer> 
                <InputSpaceContainer>
                <SignUpInputSpace placeholder="" type="pw" text={verifyPwd} setText={setverifyPwd} essentialCheck={essentialCheck} setEssential={setEssential} compareText={pwd}/>
                </InputSpaceContainer>
              {buttonStatus===false&&essentialCheck[1]['isVerified']===false?<WarningMsg msg="비밀번호를 정확히 입력해주세요."/>:<></>}
              </InputBox>
            )
        case 3:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                  <InputSpaceContainer>
                    <SignUpInputSpace placeholder="' - ' 없이 입력해주세요." type="phoneNum" text={phoneNum} setText={setPhoneNum} essentialCheck={essentialCheck} setEssential={setEssential} compareText=""/>
                    <span className={styles.checkButtonWrapper} onClick={()=>phoneNum.length===11&&onClickHandler("phoneNum")}>
                      <CheckButton type="phoneNum" content = {phoneNum} buttonName={"문자보내기"}/>
                    </span>
                  </InputSpaceContainer>
                  <InputSpaceContainer>
                  <SignUpInputSpace placeholder="" type="authNum" text={authNum} setText={setauthNum} essentialCheck={essentialCheck} setEssential={setEssential} compareText=""/>
                  <span className={styles.checkButtonWrapper} onClick={()=>onClickHandler("authNum")}>
                    <CheckButton type="authNum" content = {authNum} buttonName={"인증하기"}/>
                  </span>
                  </InputSpaceContainer>
                  {essentialCheck[3]['isChecked']===true&&essentialCheck[3]['isVerified']===true?(<IsOkMsg msg="인증되었습니다."/>):<></>}
                  {essentialCheck[3]['isChecked']===true&&essentialCheck[3]['isVerified']===false?(<WarningMsg msg="본인 인증에 실패했습니다."/>):<></>}
              </InputBox>
            )
        case 4:
            return(
              <InputBox key = {content.number} title={content.title} subTitle={content.subTitle}>
                 <InputSpaceContainer>
                 <SignUpInputSpace placeholder="" type="nickName" text={nickName} setText={setNickName} essentialCheck={essentialCheck} setEssential={setEssential} compareText=""/>
                  <span className={styles.checkButtonWrapper} onClick={()=>onClickHandler('nickName')}>
                    <CheckButton type="nickName" content = {nickName} buttonName={"중복확인"}/>
                  </span>
                  </InputSpaceContainer>
                  {essentialCheck[4]['isChecked']===true&&essentialCheck[4]['isVerified']===true?<IsOkMsg msg="사용 가능한 닉네임입니다."/>:<></>}
                  {essentialCheck[4]['isChecked']===true&&essentialCheck[4]['isVerified']===false?<WarningMsg msg="이미 있는 닉네임입니다."/>:<></>}
                {(nickName===""&&buttonStatus===false)?(
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
        {essentialCheck.filter(x=>x.isVerified===false).length>0?
          (
            <>
            <WarningBox message="모든 항목을 입력해주세요" status= {warningStatus} setStatus={setWarning}/>
            <span className = {styles.grayButtonWrapper} onClick={()=>{setButton(false);setWarning(true)}}><WidthButton color="gray" buttonText ="회원가입하기"/></span>
            </>)
            :<Link className = {styles.blueButtonWrapper} href="/newStudy" onClick={()=> signUp({id,nickName,pwd}).then(data=>console.log(data))} ><WidthButton color="blue" buttonText ="회원가입하기"/></Link>
          }
    </div>
  </main>
  </>
 )
}