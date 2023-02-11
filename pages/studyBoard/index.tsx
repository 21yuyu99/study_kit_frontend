import styles from '@/styles/studyBoard/index.module.scss'
import TopNavigation from '@/components/topNavigation';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PreviewBoard } from '@/components/studyBoard';
import Pen from '@/public/img/pen.svg'
export default function StudyBoard(){
  interface PageNumberType {
    num : number,
    point : boolean
  }
  const [pageNumbers,setPageNumbers] = useState<PageNumberType[]>([
    {
      num : 1,
      point : true
    },{
      num: 2,
      point: false
    },{
      num :3,
      point: false
    },
    {
      num:4,
      point: false
    },
    {
      num:5,
      point: false
    }
  ]);
 return(
  <>
  <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
  <nav className={styles.navContainer}>
    <Link href='/studyIntro' className={styles.navLeft}>스터디 소개</Link>
    <Link href='/studyMember' className={styles.navCenter}>스터디원</Link>
    <Link href='/studyBoard' className={styles.navRight}>게시판</Link>
  </nav>
  <main className={styles.main}>
    <PreviewBoard title="하루 단어 50개 암기 확인" isChief={true} date="2023.01.23" views={50} comment={23} nickName="dbsekdls"/>
    <PreviewBoard title="토익 시험 일자" isChief={true} date="2023.01.23" views={50} comment={23} nickName="dbsekdls"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <PreviewBoard title="p.135 질문 있습니다!" isChief={false} date="2023.01.23" views={50} comment={23} nickName="chlwldP"/>
    <div className={styles.penIcon}><Pen/></div>
    <div className={styles.pagination}>
      <div className={styles.back}>&#60;</div>
      <div className={styles.pageNumberWrapper}>
        {
          pageNumbers.map((page)=>{
            return(
              <div className={page.point===true?styles.pagePoint:styles.pageNotPoint} key={page.num} onClick={()=>setPageNumbers(
                  pageNumbers.map(
                    x=>
                    x.num===page.num?{...x,point:true}:{...x,point:false}
                )
              )}>{page.num}</div>
            )
          })
        }
      </div>
      <div className={styles.next}>&#62;</div>
    </div>    
  </main>
  </>
 )
}