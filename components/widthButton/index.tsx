import { widthButtonProps } from "@/types/widthButton";
import styles from "./widthButton.module.scss";
export const WidthButton = (props:widthButtonProps)=>{
  if(props.color==="blue"){
    return(
      <div className={styles.button_blue}>
      {props.buttonText}
    </div>  
    )
  }
  else{
    return(
      <></>
    )
  }
}