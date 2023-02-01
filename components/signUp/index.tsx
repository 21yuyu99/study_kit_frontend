import styles from "./inputBox.module.scss";
import { InputBoxProps, InputSpaceProps} from "@/types/signUp";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
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
export const InputSpace = (props:InputSpaceProps)=>{
  return(
    <form action="" method="post" className={styles.inputSpaceContainer}>
      <input value={props.text} onChange = {e => props.setText(e.target.value)} className={styles.inputSpace}></input>
      <button type="button" className={styles.inputSpaceButton}>{props.buttonName}</button>
    </form>
  )
}