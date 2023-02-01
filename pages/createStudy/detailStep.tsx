import styles from '../../styles/createStudy/detailStep.module.scss';
import Link from 'next/link';
import {AddPhoto, CountMember, InputBox, InputDeadline, InputSpace, SelectOnOff } from '@/components/createStudy/inputBox';
import { detailStepContent } from '@/components/createStudy/inputBox/content';
import { useReducer, useState } from 'react';
import { checkBoxTypes } from '@/types/createStudy';
import { WidthButton } from '@/components/widthButton';
import {Range } from 'react-date-range';
import TopNavigation from '@/components/topNavigation';
export default function DetailStep(){
  const [title,setTitle] = useState("");
  const [lan,setLan] =useState("");
  const [tool,setTool] = useState("");
  const [toggle,setToggle] = useState(false);
  const countReducer = (state:{count:number},action:{type:String})=>{
    switch(action.type){
      case "INCREMENT":
        return state.count<50?{...state,count:state.count+1}:state;
      case "DECREMENT":
        return state.count>1?{...state,count:state.count-1}:state;
      default:
        return state;
    }
  }
  const [countState,countDispatch] = useReducer(countReducer,{count:1});
  const checkReducer = (state:{check:checkBoxTypes[]},action:{type:String})=>{
    switch(action.type){
      case "ONLINE":
        let onTemp:checkBoxTypes[] = [];
        state.check.map(
          check=>{
            check.content === "비대면"?
            onTemp.push({...check,isChecked:!check.isChecked})
            :onTemp.push({...check,isChecked:false})
          }
        )
        return(
          {...state,check:onTemp}
        )
      case "OFFLINE":
        let offTemp:checkBoxTypes[] = [];
        state.check.map(
          check=>{
            check.content === "대면"?
            offTemp.push({...check,isChecked:!check.isChecked}):offTemp.push({...check,isChecked:false})
          }
        )
        return(
          {...state,check:offTemp}
        )
        default:
          return state;
    }
  }
  const [checkState,checkDispatch] = useReducer(checkReducer,{check:
    [
      {
        content : "대면",
        isChecked:false
      },
      {
        content:"비대면",
        isChecked:false,
      }
    ]
  }
    );
    const [range,setRange] = useState<Range[]>(
      [
        {
          startDate : new Date(),
          endDate : new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+2),
          key:'range',
        }
      ]
    );
 return(
  <>
  <div className={styles.topProgressBar}>
  <div className={styles.left}></div>
  <div className={styles.right}></div>
  </div>
  <TopNavigation title={"스터디 개설 (2/3)"} backSpace={true} rightIcon={"box"}></TopNavigation>
  <main className={styles.main}>
    {detailStepContent.map((content)=>{
      switch(content.number){
        case 1:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={title} setText={setTitle}/>
                <></>
            </InputBox>
          )
          case 2:
            return(
              <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
              <InputDeadline toggle={toggle} setToggle={setToggle} range={range} setRange={setRange}/>
              <></>
          </InputBox>
            )
          case 3:
            return(
              <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                  <AddPhoto/>
                  <></>
            </InputBox>
            )
        case 4:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <CountMember state={countState} dispatch={countDispatch} reducer={countReducer}/>
                <></>
          </InputBox>
          )
        case 5:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={lan} setText={setLan}/>
                <></>
            </InputBox>
          )
        case 6:
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <InputSpace text={tool} setText={setTool}/>
                <></>
            </InputBox>
          )
        case 8 :
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                <SelectOnOff state={checkState} dispatch={checkDispatch} reducer={checkReducer}/>
                <></>
            </InputBox>
          )
        default :
          return(
            <InputBox key = {content.number} number={content.number} title={content.title} subTitle={content.subTitle}>
                  <InputSpace text={title} setText={setTitle}/>
                  <></>
            </InputBox>
          )
      }
    })}
    <Link href="/createStudy/studyIntro"><WidthButton color="blue" buttonText ="다음"/></Link>
  </main>
  </>
 )
}