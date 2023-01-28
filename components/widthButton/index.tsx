import { widthButtonProps } from "@/types/widthButton";
import styles from "./widthButton.module.scss";
export const WidthButton = (props:widthButtonProps)=>{
  let button_class;
  switch(props.color){
    case "blue":
      button_class = styles.button_blue;
      break;
    case "gray" :
      button_class = styles.button_gray;
      break;
  }
    return(
      <div className={button_class}>
      {props.buttonText}
    </div>  
    )  
}