import styles from '../../styles/createStudy/detailStep.module.scss';
import { IoIosArrowBack } from 'react-icons/Io';
import { BiBox } from 'react-icons/Bi';
import Link from 'next/link';
import {CountMember, InputBox, InputSpace } from '@/components/createStudy/inputBox';
import { detailStepContent } from '@/components/createStudy/inputBox/content';
import { useReducer, useState } from 'react';
export default function DetailStep(){
  const [title,setTitle] = useState("");
  const [lan,setLan] =useState("");
  const [tool,setTool] = useState("");
  const reducer = (state:{count:number},action:{type:String})=>{
    switch(action.type){
      case "INCREMENT":
        return state.count<6?{...state,count:state.count+1}:state;
      case "DECREMENT":
        return state.count>1?{...state,count:state.count-1}:state;
      default:
        return state;
    }
  }
  const [state,dispatch] = useReducer(reducer,{count:1});
 return(
  <>
  <div className={styles.topProgressBar}>
  <div className={styles.left}></div>
  <div className={styles.right}></div>
  </div>
  <nav className={styles.top}>
      <div className={styles.back}><Link href="/createStudy/selectTemplate"><IoIosArrowBack/></Link></div>
      <div className={styles.topTitle}>스터디 개설 (2/3)</div>
      <div className={styles.box}><BiBox/></div>
  </nav>
  <main className={styles.main}>
    {detailStepContent.map((content)=>{
      switch(content.number){
        case 1:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={title} setText={setTitle}/>
            </InputBox>
          )
        case 4:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <CountMember state={state} dispatch={dispatch} reducer={reducer}/>
          </InputBox>
          )
        case 5:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={lan} setText={setLan}/>
            </InputBox>
          )
        case 6:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={tool} setText={setTool}/>
            </InputBox>
          )
        default :
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                  <InputSpace text={title} setText={setTitle}/>
            </InputBox>
          )
      }
    })}
  </main>
  </>
 )
}