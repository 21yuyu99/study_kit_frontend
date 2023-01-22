import styles from '../../styles/createStudy/detailStep.module.scss';
import { IoIosArrowBack } from 'react-icons/Io';
import { BiBox } from 'react-icons/Bi';
import Link from 'next/link';
import {InputBox, InputSpace } from '@/components/inputBox';
export default function DetailStep(){
  const one:number = 1;
  const title:string = "스터디 제목";
  const subTitle:string = "스터디의 제목을 지어주세요.";
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
    <InputBox number={one} title={title} subTitle={subTitle}>
      <InputSpace/>
    </InputBox>
  </main>
  </>
 )
}