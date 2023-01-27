import styles from "./WarningBox.module.scss";
import {IoIosWarning} from 'react-icons/io';
import {GrFormClose} from 'react-icons/gr';
export const WarningBox = ({message}:{message:string})=>{
  return(
    <div className={styles.boxContainer}>
      <span className={styles.warnImg}> <IoIosWarning size={20}/> </span>
      {message}
      <span className={styles.closeButton}><GrFormClose size={20}/></span>
    </div>
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