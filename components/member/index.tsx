import styles from "./member.module.scss";
import Rectangle from '@/public/img/Rectangle 9030.svg'
import { memberProps } from "@/types/member";

export const Member = (props:memberProps)=>{
  return(
    <div className={styles.memberContainer}>
      <div className={styles.memberPhoto}><Rectangle/></div>
      {props.isHead===true ? <div className={styles.head}>스터디장</div> : ''}
      <div className={styles.memberName}>
        {props.nickName}
      </div>
      <div className={styles.memberLevel}>
        LV {props.level}
      </div>
    </div>
  )
}