import styles from '../../styles/createStudy/detailStep.module.scss';
import { IoIosArrowBack } from 'react-icons/Io';
import { BiBox } from 'react-icons/Bi';
import Link from 'next/link';
export default function DetailStep(){
 return(
  <>
  <div className={styles.topProgressBar}>
  <div className={styles.left}></div>
  <div className={styles.right}></div>
  </div>
  <nav className={styles.top}>
      <div className={styles.back}><Link href="/createStudy/selectTemplate"><IoIosArrowBack/></Link></div>
      <div className={styles.topTitle}>스터디 개설 (2/3)</div>
      <div className={styles.box}><BiBox/></div>
  </nav>
  <main className={styles.main}>
  </main>
  </>
 )
}