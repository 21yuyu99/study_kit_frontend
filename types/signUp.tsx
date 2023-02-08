import { Dispatch, MouseEventHandler, SetStateAction } from "react"
export interface InputBoxProps {
  title : string
  subTitle : string
  children : JSX.Element[]|JSX.Element
}
export interface SignInInputSpaceProps{
  type : string
  text : string
  setText : Dispatch<SetStateAction<string>>
  placeholder : string
}
export interface SignUpInputSpaceProps{
  type : string
  text : string
  compareText : string
  setText : Dispatch<SetStateAction<string>>
  placeholder : string
  essentialCheck :essentialCheckType[]
  setEssential : Dispatch<SetStateAction<essentialCheckType[]>>
}
export interface CheckButtonProps{
  type : string
  content : string
  buttonName : string
}
export interface InputSpaceContainerProp {
  children : JSX.Element[]|JSX.Element
}
export interface essentialCheckType{
  type : string,
  isChecked : boolean,
  isVerified : boolean
}