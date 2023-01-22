import styles from "./inputBox.module.scss";
interface Props {
  number : number
  title : string
  subTitle : string
  children : JSX.Element
}

export const InputBox = (props:Props)=>{
 return(
  <div className={styles.boxContainer}>
  <div className={styles.leftBar}>
    <div className={styles.number}>
      {props.number}
    </div>
  <div className={styles.verticalLine}/>
  </div>
  <div className={styles.textContainer}>
    <h3 className={styles.title}>
      {props.title}
    </h3>
    <p className={styles.subTitle}>
      {props.subTitle}
    </p>
    {props.children}
  </div>
</div>
 )
}
export const InputSpace = ()=>{
  return(
    <input className={styles.inputSpace}></input>
  )
}