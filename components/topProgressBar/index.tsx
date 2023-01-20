import styles from "./topProgressBar.module.scss";

const TopProgressBar = ()=>{
  return(
    <div className={styles.topProgressBar}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </div>
  )
}
export default TopProgressBar;