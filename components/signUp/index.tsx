import styles from "./inputBox.module.scss";
import { CheckButtonProps, InputBoxProps, InputSpaceContainerProp, InputSpaceProps} from "@/types/signUp";
import { useState } from "react";
import { idCheckHandler } from "@/pages/api/singUp";
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
export const InputSpace = (props:InputSpaceProps)=>{
  return(
      <input
        type={props.type==="pw" ? "password" : "text"} 
        autoComplete="off"
        value={props.text} 
        onChange={e => props.setText(e.target.value)} 
        className={styles.inputSpace}
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