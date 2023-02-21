import styles from "./topNavigation.module.scss";
import Bell from '@/public/img/bell.svg';
import Box from '@/public/img/box.svg';
import Back from '@/public/img/back.svg';
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoBackWarning } from "../msgBox";

interface Props {
  title: string;
  backSpace: boolean;
  rightIcon: string;
  backgroundStyle: number;
}

const TopNavigation = ({title, backSpace, rightIcon, backgroundStyle} : Props)=>{
  const router = useRouter();
  const [goBack,setGoBack] = useState(false);
  const onBackBtnHandler = ()=>{
    if(title==="스터디 개설 (3/3)"||title==="스터디 개설 (2/3)"||title==="글쓰기"){
      setGoBack(true);
    }
    else{
      router.push(lnk);
    }
  }
  let lnk : string = ""
  if (title==="스터디 개설 (1/3)") {
    lnk = "/newStudy"
  }
  else if (title==="스터디 개설 (2/3)") {
    lnk = "/createStudy/selectTemplate"
  }
  else if (title==="스터디 개설 (3/3)") {
    lnk = "/createStudy/detailStep"
  }
  else if (title==="회원가입"|| title==="로그인") {
    lnk = "/"
  }
  else if (title==="가입 신청 관리") {
    lnk = "/studyMember"
  }
  else if (title==="글쓰기") {
    lnk = "/studyBoard"
  }
  else {
    lnk = "/myStudy"
  }
  let icon
  if (rightIcon==="bell"){
    icon = <Bell/>
  }
  else if (rightIcon==="box"){
    icon = <Box/>
  }
  /*backgroundStyle 0일때 (배경색 흰색, 아래테두리 있음)
    backgroundStyle 1일때 (배경색 회색, 아래테두리 있음)
    backgroundStyle 2일때 (배경색 회색, 아래테두리 없음)*/
  let backStyle
  if (backgroundStyle===0) {
    backStyle = {
      borderBottom:'solid 1px #DBDBDB',
      background:'white'
    }
  }
  else if (backgroundStyle===1) {
    backStyle = {
      borderBottom:'solid 1px #DBDBDB',
    }
  }
  else {
    backStyle = {
    }
  }
  return(
    <>
    <nav className={styles.top} style={backStyle}>
      {backSpace===true?
        (<div className={styles.back} onClick={()=>onBackBtnHandler()}><Back/></div>) 
        :
          (<div className={styles.topLeftContainer}></div>)
        }
      <div className={styles.topTitle}>{title}</div>
      <div className={styles.icon}>{icon}</div>
    </nav>
    {goBack===true&&<GoBackWarning status={goBack} setStatus={setGoBack}/>}
    </>

  )
}
export default TopNavigation;