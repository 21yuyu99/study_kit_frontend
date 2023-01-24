import { Dispatch, SetStateAction } from "react"

export interface InputBoxProps {
  number : number
  title : string
  subTitle : string
  children : JSX.Element
}
export interface InputSpaceProps{
  text : string
  setText : Dispatch<SetStateAction<string>>
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
export interface ToggleProps{
  toggle:boolean
  setToggle:Dispatch<SetStateAction<boolean>>
}