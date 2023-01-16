import styles from '../styles/newStudy.module.scss';
export default function newStudy(){
 return(
  <>
  <nav className={styles.topTemp}>새 스터디</nav>
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
  </main>
  <nav className={styles.bottomTemp}>홈 새스터디 마이페이지</nav>
  </>
 )
}