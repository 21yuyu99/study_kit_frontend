import styles from "./msgBox.module.scss";
import {IoIosWarning} from 'react-icons/io';
import {GrFormClose} from 'react-icons/gr';
import { Dispatch, SetStateAction } from "react";
import Check from '@/public/img/check.svg'
import { BiX } from "react-icons/bi";
import Link from "next/link";
interface MsgBoxProps{
  message : string,
  status : boolean,
  setStatus : Dispatch<SetStateAction<boolean>>
}
interface GoBackProps {
  deleteExit : string,
  message : string,
  subMessage : string,
  status : boolean,
  setStatus : Dispatch<SetStateAction<boolean>>
}
export const WarningBox = ({message,status,setStatus}:MsgBoxProps)=>{
  if(status===true){
    return(
      <div className={styles.warningBoxContainer}>
      <span className={styles.warnImg}> <IoIosWarning size={20}/> </span>
      {message}
      <span className={styles.closeButton} onClick={()=> setStatus(false)}><GrFormClose size={20}/></span>
    </div>
    )
  }
  return(
    <></>
  )
}
export const WarningMsg = ({msg}:{msg:string}) =>{
return(
  <div className={styles.msgContainer}>
  <span className={styles.warnImg}> <IoIosWarning size={20}/> </span>
  {msg}
</div>
)
} 
export const IsOkMsg = ({msg}:{msg:string}) =>{
  return(
    <div className={styles.isOkContainer}>
    {msg}
    </div>
  )
  }
export const IsOKBox = ({message,status,setStatus}:MsgBoxProps)=>{
    if(status===true){
      return(
        <div className={styles.okBoxContainer}>
        <span className={styles.OkImg}> <Check/> </span>
        {message}
        <span className={styles.closeButton} onClick={()=> setStatus(false)}><GrFormClose size={20}/></span>
        </div>
      )
    }
    return(
      <></>
    )
}
export const GoBackWarning = (props:GoBackProps)=>{
  const {setStatus} = props;
  return(
    <div className={styles.goBackContainer}>
      <div className={styles.goBackBox}>
      <div className={styles.goBackTopContainer}>
      <div className={styles.goBackTitle}>
        {props.message}
      </div>
      <div><BiX size = {20}/></div>
      </div>
      <div className={styles.goBackSubText}>
        {props.subMessage}
      </div>
      <div className={styles.goBackBtnContainer}>
        <div className={styles.goBackCancel} onClick={()=> setStatus(false)}>취소하기</div>
        <Link href={props.deleteExit} className={styles.goBackBtn}>삭제하고 나가기</Link>
      </div>
      </div>
    </div>
  )
}