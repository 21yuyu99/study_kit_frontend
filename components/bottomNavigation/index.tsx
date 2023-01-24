import styles from "./bottomNavigation.module.scss";
import Home from '../../public/img/home.svg';
import HomeB from '../../public/img/homeB.svg';
import Book from '../../public/img/book.svg';
import BookB from '../../public/img/bookB.svg';
import Man from '../../public/img/man.svg';
import ManB from '../../public/img/manB.svg';
import { ReactNode } from "react";

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
    //center = <manB/>
  }
  return(
    <nav className={styles.bottomNavigation}>
      <div className={styles.icon}>{left}
        <div className={styles.text}>홈</div>
      </div>
      <div className={styles.icon}>{center}
        <div className={styles.text}>새 스터디</div>
      </div>
      <div className={styles.icon}>{right}
        <div className={styles.text}>마이페이지</div>
      </div>
    </nav>
  )
}
export default BottomNavigation;