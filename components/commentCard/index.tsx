import styles from "./index.module.scss";
import { FaCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Key, useState } from "react";
interface Props {
  key: Key,
  nickName: string;
  isHead : boolean;
  content : string;
  date : string;
  nestedCommentNum : number;
  nestedComment : {
    key: Key,
    nickName: string;
    isHead : boolean;
    content : string;
    date : string;
 };
}

const CommentCard = ({nickName,content,date,nestedComment,isHead,nestedCommentNum} : Props)=>{
  const [toggle,setToggle] = useState(false);
  const onClickToggle = ()=>{
    if(toggle === true){
      setToggle(false);
    }
    else{
      setToggle(true);
    }
  }
  return(
    <div className={styles.main} onClick={()=>onClickToggle()}>
      <div className={styles.topContainer}>
        <div className={isHead===true?styles.photo_yellow:styles.photo_gray}><FaCircle size={38}/></div>
        <div className={styles.nickName}>{nickName}</div>
        {isHead===true&&<div className={styles.head}>스터디장</div>}
      </div>
      <div className={styles.midContainer}>
        <div className={styles.content}>{content}</div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.date}>{date}</div>
        <div className={styles.reply}>답글쓰기</div>
        <div className={styles.reply}>답글{nestedCommentNum}</div>
        <div className={styles.remove}>삭제하기</div>
      </div>
      {nestedCommentNum!==0&&toggle===false&&<div className={styles.toggle}><MdOutlineKeyboardArrowUp/></div>}
      {nestedCommentNum!==0&&toggle===true&&
      <><div className={styles.topContainer}>
          <div className={nestedComment.isHead===true?styles.photo_yellow:styles.photo_gray}><FaCircle size={38}/></div>
          <div className={styles.nickName}>{nestedComment.nickName}</div>
          {nestedComment.isHead===true&&<div className={styles.head}>스터디장</div>}
        </div>
        <div className={styles.midContainer}>
          <div className={styles.content}>{nestedComment.content}</div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.date}>{nestedComment.date}</div>
          <div className={styles.reply}>답글쓰기</div>
          <div className={styles.remove}>삭제하기</div>
        </div>
        {toggle===true&&<div className={styles.toggle}><MdOutlineKeyboardArrowDown/></div>}</>}
    </div>
  )
}
export default CommentCard;