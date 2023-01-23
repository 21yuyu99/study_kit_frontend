import { FiMinus, FiPlus} from "react-icons/fi";
import styles from "./inputBox.module.scss";
import { CountMemberProps, InputBoxProps, InputSpaceProps } from "@/types/createStudy";

export const InputBox = (props:InputBoxProps)=>{
 return(
  <div className={styles.boxContainer}>
  <div className={styles.leftBar}>
    <div className={styles.number}>
      {props.number}
    </div>
  <div className={styles.verticalLine}/>
  </div>
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
export const InputSpace = (props:InputSpaceProps)=>{
  return(
    <input value={props.text} onChange = {e => props.setText(e.target.value)} className={styles.inputSpace}></input>
  )
}
export const InputDeadline = ()=>{
  return(
    <input></input>
  )
}
export const CountMember = (props:CountMemberProps)=>{
  return(
    <div className={styles.countContainer}>
    <div className={styles.countButton} onClick={()=> props.dispatch({type:"DECREMENT"})}><FiMinus /></div>
    <div className={styles.countNumber}>{props.state.count}</div>
    <div className={styles.countButton} onClick={()=> props.dispatch({type:"INCREMENT"})}><FiPlus /></div>
    </div>
  )
}
export const selectonOff = ()=>{
  return(
    <>
    </>
  )
}