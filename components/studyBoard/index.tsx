import styles from './studyBoard.module.scss';
import Speaker from '@/public/img/speaker.svg';
export interface PreviewBoardProps{
  title : string,
  isChief : boolean,
  date : string,
  views : number,
  comment : number,
  nickName : string
}
export const PreviewBoard = (props:PreviewBoardProps)=>{
  const {title,isChief,date,views,comment,nickName} = props;
  return(
    <div className={styles.previewBoardContainer}>
      <div className={styles.preivewLeftContainer}>
        <div className={styles.previewTitle}>
          {isChief&&<Speaker/>}
          {title}
        </div>
        <div className={styles.previewSubInfo}>
          <span>
          {date}
          </span>
          <span>
            조회 {views}
          </span>
          <span>
            댓글 {comment}
          </span>
        </div>
      </div>
      <div className={styles.previewRightContainer}>
        <div className={isChief?styles.previewBoardIcon_yellow:styles.previewBoardIcon_blue}/>
        <div className={styles.previewWhoContainer}>
        {isChief&&<div className={styles.previewChiefIcon}>스터디장</div>}
        <div className={styles.previewNickname}>{nickName}</div>
        </div>
      </div>
    </div>
  )
}