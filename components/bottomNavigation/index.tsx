import styles from "./bottomNavigation.module.scss";
import Home from '../../public/img/home.svg';
import HomeB from '../../public/img/homeB.svg';
import Book from '../../public/img/book.svg';
import BookB from '../../public/img/bookB.svg';
import Man from '../../public/img/man.svg';
import ManB from '../../public/img/manB.svg';
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  location: ReactNode;
}

const BottomNavigation = ({location} : Props)=>{
  let left, center, right
  left = <Home/>
  center = <Book/>
  right = <Man/>
  if (location == "홈") {
    left = <HomeB/>
  }
  else if (location == "새스터디") {
    center = <BookB/>
  }
  else if (location == "마이페이지") {
    //right = <manB/>
  }
  return(
    <nav className={styles.bottomNavigation}>
      <Link href='/home' className={styles.icon}>{left} 
        <div className={styles.text}>홈</div>
      </Link>
      <Link href='/newStudy' className={styles.icon}>{center} 
        <div className={styles.text}>새 스터디</div>
      </Link>
      <Link href='' className={styles.icon}>{right}
        <div className={styles.text}>마이페이지</div>
      </Link>
    </nav>
  )
}
export default BottomNavigation;