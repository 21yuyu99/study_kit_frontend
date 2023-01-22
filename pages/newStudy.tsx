import styles from '../styles/newStudy.module.scss';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import StudyTypeBar from '@/components/studyTypeBar';
import StudyCard from '@/components/studyCard';
import BottomNavigation from '@/components/bottomNavigation';
import { useState } from 'react';
import Plus from '../img/plus.svg';
import Link from 'next/link'
export default function NewStudy(){
  const [search,setSearch] = useState("");
 return(
  <>
  <nav className={styles.top}>
      <div className={styles.topLeftContainer}></div>
      <div className={styles.topTitle}>새 스터디</div>
      <div className={styles.bell}><AiOutlineBell/></div>
  </nav>
  <main className={styles.main}>
    <div className={styles.banner}>
      <div className={styles.bannerText}>
      <div className={styles.bannerTitle}>
          <h3>원하는 스터디가 없다면?</h3><h3>스터디장이 될 차례!</h3>
        </div>
       <p><Link href="/createStudy/selectTemplate">스터디키트가 떠먹여주는 스터디 만들기 &gt;</Link></p>
      </div>
      <div className={styles.pencil}>✏️</div>
    </div>
    <form action="" method="GET" className={styles.searchBox}>
      <input value={search} onChange={e=> setSearch(e.target.value)} type="text" placeholder='스터디주제, 이름 검색'></input>
      <button type="submit" className={styles.searchButton}><AiOutlineSearch size="20"/></button>
    </form>
    <StudyTypeBar/>
    <StudyCard/>
    <StudyCard/>
    <div className={styles.createStudy}>
      <Plus/>
      <div className={styles.createStudyText}>
        <div className={styles.createStudyTitle}>
          <h3>새 스터디 만들기</h3>
        </div>
        <p>원하는 스터디가 없다면? 스터디장이 될 차례!</p>
      </div>
    </div>
    <div className={styles.noSearchResult}>더이상 검색결과가 없습니다</div>
  </main>
  <BottomNavigation/>
  </>
 )
}