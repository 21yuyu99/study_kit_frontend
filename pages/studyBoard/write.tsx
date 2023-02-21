import styles from '@/styles/studyBoard/write.module.scss'
import TopNavigation from '@/components/topNavigation';
import { BsFillCheckSquareFill, BsPlus } from 'react-icons/Bs'
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function BoardWrite(){
 const [title,setTitle] = useState("");
 const [content,setContent] = useState("");
 const [checkBox,setCheckBox] = useState(false);
 const onClickCheckBox = ()=>{
   if(checkBox === true){
    setCheckBox(false);
   }
   else{
    setCheckBox(true);
   }
 }
 return(
  <>
  <TopNavigation title={"글쓰기"} backSpace={true} rightIcon={""} backgroundStyle={1}></TopNavigation>
  <main className={styles.main}>
    <div className={styles.topContainer}>
      <input value={title} onChange = {e => setTitle(e.target.value)} placeholder="제목" className={styles.title}></input>
      <div className={styles.checkNotice} onClick={()=>onClickCheckBox()}>
        <BsFillCheckSquareFill className={checkBox===true?`${styles.checkBox_on}`:`${styles.checkBox_off}`}/>
        <div className={checkBox===true?`${styles.boxText_on}`:`${styles.boxText_off}`}>공지</div>
      </div>  
    </div>
    <div className={styles.midContainer}>
      <textarea value={content} onChange = {e => setContent(e.target.value)} placeholder="내용을 입력하세요." className={styles.content}></textarea>
    </div>
    <div className={styles.bottomContainer}>
      <div className={styles.button_gray}>
        <div className={styles.buttonContent}><BsPlus size={25}/>&nbsp;&nbsp;&nbsp;사진 추가하기</div>
      </div>
      <div className={styles.button_blue}>글 작성하기</div>
    </div>
  </main>
  </>
 )
}