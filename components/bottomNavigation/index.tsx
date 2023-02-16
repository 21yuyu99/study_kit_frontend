import styles from "./bottomNavigation.module.scss";
import Home from '../../public/img/home.svg';
import HomeB from '../../public/img/homeB.svg';
import Book from '../../public/img/book.svg';
import BookB from '../../public/img/bookB.svg';
import Man from '../../public/img/man.svg';
import ManB from '../../public/img/manB.svg';
import { ReactNode, useState } from "react";
import Link from "next/link";
import cookie from 'react-cookies';
import { PopUp } from "../signUp";
import { useRouter } from "next/router";
interface Props {
  location: ReactNode;
}

const BottomNavigation = ({location} : Props)=>{
  const [popUpStatus,setPopUp] = useState(false);
  const router = useRouter();
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
  const onClickHandler = (link:string)=>{
    cookie.load('accessToken')===undefined?setPopUp(true):router.push(link);
  }
  return(
    <>
    <nav className={styles.bottomNavigation}>
      <div onClick={()=>onClickHandler('/myStudy')} className={styles.icon}>{left} 
        <div className={styles.text}>홈</div>
      </div>
      <Link href='/newStudy' className={styles.icon}>{center} 
        <div className={styles.text}>새 스터디</div>
      </Link>
      <div onClick={()=>onClickHandler('')} className={styles.icon}>{right}
        <div className={styles.text}>마이페이지</div>
      </div>
    </nav>
    {popUpStatus===true&&<PopUp status={popUpStatus} setStatus={setPopUp}/>}
    </>
  )
}
export default BottomNavigation;