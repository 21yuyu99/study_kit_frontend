import styles from "./inputBox.module.scss";
import { InputBoxProps, InputSpaceProps} from "@/types/signUp";
import { useState } from "react";
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
  let [active, setActive] = useState(false);
  const ActiveIsIdDoubleCheck = () => {
    return props.text.length >= 3
      ? setActive(true)
      : setActive(false);
  };
  const ActiveIsOtherCheck = () => {
    return props.text.length >= 1
      ? setActive(true)
      : setActive(false);
  };
  let disabledController
  if (props.index==1) {
    disabledController = props.text.length < 3
  }
  else {
    disabledController = props.text == ""
  }
  return(
    <form action="" method="post" className={styles.inputSpaceContainer}>
      <input
        type={props.index==2 ? "password" : "text"} 
        value={props.text} 
        onChange={e => props.setText(e.target.value)} 
        className={styles.inputSpace}
        onKeyUp={props.index==1 ? ActiveIsIdDoubleCheck : ActiveIsOtherCheck}
      ></input>
      <button 
        type="button" 
        className={active ? styles.activeButton : styles.disabledButton} 
        disabled={disabledController ? true : false}
      >{props.buttonName}</button>
    </form>
  )
}