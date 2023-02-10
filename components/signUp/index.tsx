import styles from "./signUp.module.scss";
import { CheckButtonProps, InputBoxProps, InputSpaceContainerProp, PopUpProps, SignInInputSpaceProps,SignUpInputSpaceProps} from "@/types/signUp";
import { useState } from "react";
import { idCheckHandler } from "@/pages/api/signInUp";
import Link from "next/link";
import Kakao from '@/public/img/kakao.svg'
import Google from '@/public/img/google.svg'
import {BiX} from 'react-icons/bi';
export const InputBox = (props:InputBoxProps)=>{
 return(
  <div className={styles.boxContainer}>
  <div className={styles.leftBar}></div>
  <div className={styles.textContainer}>
    <h3 className={styles.title}>
      {props.title}
    </h3>
    <p className={styles.subTitle}>
      {props.subTitle}
    </p>
    {props.children}
  </div>
</div>
 )
}
export const InputSpaceContainer = (props:InputSpaceContainerProp)=>{
return(
  <form action="" method="post"className={styles.inputSpaceContainer}>
    {props.children}
 </form>
)
}
export const SignInInputSpace = (props:SignInInputSpaceProps)=>{
  return(
      <input
        type={props.type==="pw" ? "password" : "text"} 
        autoComplete="off"
        value={props.text} 
        onChange={e => props.setText(e.target.value)} 
        className={styles.inputSpace}
        placeholder={props.placeholder}
      ></input>
  )
}
export const SignUpInputSpace = (props:SignUpInputSpaceProps)=>{
  const {essentialCheck,setEssential,type,text,compareText} = props;
  const onChangeHandler = (value : HTMLInputElement["value"]) =>{
    if(type==="id"){
      setEssential(
      essentialCheck.map(
        x =>
        x.type===type?{...x,isChecked : false,isVerified : false}:x
      ) 
    )
    }
    else if(type==="pw"){
      const number = /[0-9]/;
      const eng = /[a-zA-Z]/;
      const special = /[~!@#\#$%<>^&*]/;
      if(value.length>=8&&value===compareText&&number.test(value)&&eng.test(value)&&special.test(value)){
        setEssential(
          essentialCheck.map(
            x =>
            x.type==="pw"?{...x,isVerified : true}:x
          )
        )
      }
      else{
        setEssential(
          essentialCheck.map(
            x =>
            x.type==="pw"?{...x,isVerified : false}:x
          )
        )
      }
    }
    else if(type==="nickName"&&essentialCheck[4]['isChecked']===true){
      setEssential(
        essentialCheck.map(
          x =>
          x.type==="nickName"?{...x, isChecked:false, isVerified : false}:x
        )
      )
    }
  }
  return(
      <input
        type={props.type==="pw" ? "password" : "text"} 
        autoComplete="off"
        value={props.text} 
        onChange={e => {props.setText(e.target.value);onChangeHandler(e.target.value)}} 
        className={styles.inputSpace}
        placeholder={props.placeholder}
      ></input>
  )
}
export const CheckButton = (props:CheckButtonProps)=>{
  const {type,content,buttonName} = props;
  const activeCheck = ()=>{
    if(type==="id"){
      return content.length >= 3
      ? styles.activeButton
      : styles.disabledButton;
    }
    else if (type==="phoneNum"){
      return content.length === 11
      ? styles.activeButton
      : styles.disabledButton;
    }
    else if (type==="authNum"){
      return content.length === 6
      ? styles.activeButton
      : styles.disabledButton;
    }
    else{
      return content.length >= 1
      ? styles.activeButton
      : styles.disabledButton;
    }
  }
 return(
  <button type="button" className={activeCheck()}>
          {buttonName}
  </button>
 )
}
export const PopUp = (props:PopUpProps) =>{
  const {setStatus} = props;
  return(
    <div className={styles.popUpContainer}>
      <div className={styles.popUpTopContainer}>
        <div className={styles.popUptitle}>지금 회원가입하고<br/>스터디에 참여하세요</div>
        <div className={styles.removeBtn} onClick={()=>setStatus(false)}><BiX/></div>
      </div>
      <div className={styles.guideSectionWrapper}><GuideSection/></div>
      <SignUpBtBox/>
    </div>
  )
}
export const GuideSection = ()=>{
  return(
    <>
      <div className={styles.linkContainer}>
        <div className={styles.linkToSignIn}>
          이미 회원이신가요? <Link href='/signIn'>로그인</Link>
        </div>
        <div className={styles.linkToNewStudy}>
          <Link href='/newStudy'>먼저 둘러보기 &#62;</Link>
        </div>
      </div>
    </>
  )
}
export const  SignUpBtBox = ()=>{
  return(
    <>
    <div className={styles.signUp}>
      <Link href='/signUp'><div className={styles.studyKit}><h3>1분만에 회원가입하기</h3></div></Link>
      <Link href=''><div className={styles.kakao}><Kakao/><h3>카카오로 바로 시작하기</h3></div></Link>
      <Link href=''><div className={styles.google}><Google/><h3>구글로 바로 시작하기</h3></div></Link>
  </div>	
    </>
  )
}