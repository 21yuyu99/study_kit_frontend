import styles from '../styles/newStudy.module.scss';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
export default function newStudy(){
 return(
  <>
  <nav className={styles.top}>
      <div className={styles.topLeftContainer}></div>
      <div className={styles.topTitle}>새 스터디</div>
      <div className={styles.bell}><AiOutlineBell></AiOutlineBell></div>
  </nav>
  <main className={styles.main}>
    <div className={styles.banner}>
      <div className={styles.bannerText}>
      <div className={styles.bannerTitle}>
          <h3>원하는 스터디가 없다면?</h3><h3>스터디장이 될 차례!</h3>
        </div>
        <p>스터디키트가 떠먹여주는 스터디 만들기 &gt;</p>
      </div>
      <div className={styles.pencil}>✏️</div>
    </div>
    <form action="" method="GET" className={styles.searchBox}>
      <input type="text" placeholder='스터디주제, 이름 검색'></input>
      <button type="submit" className={styles.searchButton}><AiOutlineSearch size="20"></AiOutlineSearch></button>
    </form>
  </main>
  <nav className={styles.bottomTemp}>홈 새스터디 마이페이지</nav>
  </>
 )
}