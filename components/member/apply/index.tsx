import styles from "./apply.module.scss";
import Rectangle from '@/public/img/Rectangle 9030.svg'
import Refuse from '@/public/img/refuse.svg'
import Accept from '@/public/img/accept.svg'
import { applyMemberProps } from "@/types/member";
import { useState } from "react";

export const ApplyMember = (props:applyMemberProps)=>{
  const [click,setClick] = useState(false);
  const onClickContainer = ()=>{
    if(click === true){
      setClick(false);
    }
    else{
      setClick(true);
    }
  }
  const sendRefuseValue = ()=>{
    props.getMsgBoxValue(0)
  }
  const sendAcceptValue = ()=>{
    props.getMsgBoxValue(1)
  }
  let backgroundeStyle, textStyle
  {click===true ? (backgroundeStyle = {backgroundColor: '#F4F4F4'}, textStyle = {color: '#7E8489'}) 
  : (backgroundeStyle = {backgroundColor: 'white'}, textStyle = {color: '#9E9E9E'})}
  return(
    <div className={styles.borderContainer} style={backgroundeStyle} onClick={()=>onClickContainer()}>
      <div className={styles.mainContainer}>
        <div className={styles.topContent}>
          <div className={styles.memberPhoto}><Rectangle/></div>
          <div className={styles.memberName}>
            {props.nickName}
            <div className={styles.level}>LV {props.level}</div>
          </div>
          <div className={styles.time} style={textStyle}>
            {props.elapsedHour/24 >=1 ? Math.floor(props.elapsedHour/24)+"일 전" : props.elapsedHour+"시간 전"}
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.leftContainer}></div>
          {click===true ? 
            <div>
              <div className={styles.qText} style={textStyle}>{props.intro}</div>
              <div className={styles.qTitle}>Q1.</div>
              <div className={styles.qText} style={textStyle}>{props.q1}</div>
              <div className={styles.qTitle}>Q2.</div>
              <div className={styles.qText} style={textStyle}>{props.q2}</div>
              <div className={styles.bottomContainer}>
                <div className={styles.bottomLeftContainer}></div>
                <div className={styles.buttonContainer} onClick={(event)=>event.stopPropagation()}>
                  <div className={styles.refuseButton} onClick={sendRefuseValue}><Refuse/><div className={styles.buttonText}>거절하기</div></div>
                  <div className={styles.acceptButton} onClick={sendAcceptValue}><Accept/><div className={styles.buttonText}>승인하기</div></div>
                </div>
              </div>
            </div>
          : <div className={styles.qText} style={textStyle}>{props.intro}</div>}
        </div>
      </div>
    </div>
  )
}