import styles from "./msgBox.module.scss";
import {IoIosWarning} from 'react-icons/io';
import {GrFormClose} from 'react-icons/gr';
import { Dispatch, SetStateAction } from "react";
import Check from '@/public/img/check.svg'
interface MsgBoxProps{
  message : string,
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
export const  IsOKBox = ({message,status,setStatus}:MsgBoxProps)=>{
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