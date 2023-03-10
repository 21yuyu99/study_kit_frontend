import { QnaType } from "@/pages/createStudy/studyIntro";
import { Dispatch, ReactElement, SetStateAction } from "react"
import {Range } from 'react-date-range';

export interface InputBoxProps {
  number : number
  title : string
  subTitle : string
  children : React.ReactNode;
}
export interface InputSpaceProps{
  text : string
  setText : Dispatch<SetStateAction<string>>
}
export interface InputQnaProps{
  id : number
  qnaList : QnaType[]
  setQna : Dispatch<SetStateAction<QnaType[]>>
}
export interface checkBoxTypes{
  content:string
  isChecked: boolean
}
export interface InputCheckProps {
  state : {
    check: checkBoxTypes[];
} | {
    temp: checkBoxTypes[];
    check: checkBoxTypes[];
}
 dispatch : Dispatch<{
  type: String;
}>
 reducer : (state: {
  check: checkBoxTypes[];
}, action: {
  type: String;
}) => {
  check: checkBoxTypes[];
} | {
  onTemp: checkBoxTypes[];
  check: checkBoxTypes[];
} | {
  offTemp: checkBoxTypes[];
  check: checkBoxTypes[];
}
}
export interface DeadlineProps{
  toggle:boolean
  setToggle:Dispatch<SetStateAction<boolean>>
  range : Range[]
  setRange : Dispatch<SetStateAction<Range[]>>
}
export interface CountMemberProps {
  state : {count:number}
  dispatch :Dispatch<{
    type: String;
  }>
  reducer: (state: {
    count: number;
}, action: {
    type: String;
}) => {
    count: number;
}
}