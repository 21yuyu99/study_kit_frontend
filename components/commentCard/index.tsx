import styles from "./index.module.scss";
import { FaCircle } from "react-icons/fa";
interface Props {
  nickName: string;
  content : string;
  date : string;
  reply : number;
}

const CommentCard = ({nickName,content,date,reply} : Props)=>{

  return(
    <div className={styles.main}>
      <div className={styles.topContainer}>
        <div className={styles.photo}><FaCircle size={38}/></div>
        <div className={styles.nickName}>{nickName}</div>
      </div>
      <div className={styles.midContainer}>
        <div className={styles.content}>{content}</div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.date}>{date}</div>
        <div className={styles.reply}>답글쓰기</div>
        <div className={styles.reply}>답글{reply}</div>
        <div className={styles.remove}>삭제하기</div>
      </div>
    </div>
  )
}
export default CommentCard;