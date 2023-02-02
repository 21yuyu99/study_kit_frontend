import { Dispatch, SetStateAction } from "react"
export interface InputBoxProps {
  title : string
  subTitle : string
  children : JSX.Element[]
}
export interface InputSpaceProps{
  index : number
  text : string
  setText : Dispatch<SetStateAction<string>>
  buttonName : string
}