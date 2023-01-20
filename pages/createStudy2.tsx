import styles from '../styles/createStudy2.module.scss';
import { IoIosArrowBack } from 'react-icons/Io';
import { BiBox } from 'react-icons/Bi';
import TopProgressBar from '@/components/topProgressBar';
export default function createStudy2(){
 return(
  <>
  <TopProgressBar/>
  <nav className={styles.top}>
      <div className={styles.back}><IoIosArrowBack/></div>
      <div className={styles.topTitle}>스터디 개설 (2/3)</div>
      <div className={styles.box}><BiBox/></div>
  </nav>
  <main className={styles.main}>
  </main>
  </>
 )
}