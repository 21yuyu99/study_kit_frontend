import styles from "./warningBox.module.scss";
import {IoIosWarning} from 'react-icons/io';
import {GrFormClose} from 'react-icons/gr';
import { Dispatch, SetStateAction } from "react";
interface WarningBoxProps{
  message : string,
  status : boolean,
  setStatus : Dispatch<SetStateAction<boolean>>
}
export const WarningBox = ({message,status,setStatus}:WarningBoxProps)=>{
  if(status===true){
    return(
      <div className={styles.boxContainer}>
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