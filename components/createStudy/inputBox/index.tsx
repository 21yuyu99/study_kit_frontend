import { FiMinus, FiPlus} from "react-icons/fi";
import styles from "./inputBox.module.scss";
import { CountMemberProps, InputBoxProps, InputCheckProps, InputSpaceProps, ToggleProps } from "@/types/createStudy";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'

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
export const InputDeadline = (props:ToggleProps)=>{
  const [value, onChange] = useState(new Date());
  return(
    <>
      <div className={props.toggle===true?`${styles.deadlineContainer_on}`:`${styles.deadlineContainer_off}`}>
        <div className={styles.toggleSwitch} onClick={()=>props.setToggle(!props.toggle)}>
          <div className={props.toggle===true?`${styles.toggleButton_on}`:`${styles.toggleButton_off}`}></div>
        </div>
      </div>  
      <div>

      </div>
      <div className={styles.calendar}>
        <Calendar onChange={onChange} value={value}/>
      </div>
    </>
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
export const SelectOnOff = (props:InputCheckProps)=>{
  return(
    <div className={styles.checkBoxContainer}>
        {props.state.check[0].isChecked===true?(
          <div className={styles.isChecked} onClick={()=> props.dispatch({type:"OFFLINE"})}>
                        <div className={styles.checkSvg}><AiOutlineCheck/></div>
          </div>
        ):(<div className={styles.isNotChecked} onClick={()=> props.dispatch({type:"OFFLINE"})}>
          </div>)
        }
      <span className={props.state.check[0].isChecked===true?`${styles.color_black}`:`${styles.color_gray}`}>대면</span>
      {props.state.check[1].isChecked===true?(
          <div className={styles.isChecked} onClick={()=> props.dispatch({type:"ONLINE"})}>
                        <div className={styles.checkSvg}><AiOutlineCheck/></div>
          </div>
        ):(<div className={styles.isNotChecked} onClick={()=> props.dispatch({type:"ONLINE"})}>
          </div>)
        }
      <span className={props.state.check[1].isChecked===true?`${styles.color_black}`:`${styles.color_gray}`}>비대면</span>
    </div>
  )
}
export const AddPhoto = ()=>{
  return(
      <div className={styles.photoButton}>
        <label htmlFor="chooseFile">
        <AiOutlinePlus/> 사진 추가하기
        </label>
    <input type="file" id="chooseFile" accept="image"></input>
    </div>
  )
}