import { Dispatch, MouseEventHandler, SetStateAction } from "react"
export interface InputBoxProps {
  title : string
  subTitle : string
  children : JSX.Element[]
}
export interface InputSpaceProps{
  type : string
  text : string
  setText : Dispatch<SetStateAction<string>>
}
export interface CheckButtonProps{
  type : string
  content : string
  buttonName : string
}
export interface InputSpaceContainerProp {
  children : JSX.Element[]|JSX.Element
}