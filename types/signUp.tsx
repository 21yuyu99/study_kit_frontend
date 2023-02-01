import { Dispatch, SetStateAction } from "react"
export interface InputBoxProps {
  title : string
  subTitle : string
  children : JSX.Element[]
}
export interface InputSpaceProps{
  text : string
  setText : Dispatch<SetStateAction<string>>
  buttonName : string
}