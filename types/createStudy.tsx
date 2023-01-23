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