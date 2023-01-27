import styles from "./topNavigation.module.scss";
import Bell from '@/public/img/bell.svg';
import Box from '@/public/img/box.svg';
import { IoIosArrowBack } from 'react-icons/io';
import Link from "next/link";

interface Props {
  title: string
  backSpace: boolean;
  bellOrBox: boolean;
}

const topNavigation = ({title, backSpace, bellOrBox} : Props)=>{
  let lnk : string = ""
  if (title=="스터디 개설 (1/3)") {
    lnk = "/newStudy"
  }
  else if (title=="스터디 개설 (2/3)") {
    lnk = "/createStudy/selectTemplate"
  }
  else if (title=="스터디 개설 (3/3)") {
    lnk = "/createStudy/detailStep"
  }
  return(
    <nav className={styles.top}>
      {backSpace===true?
        (<div className={styles.back}><Link href={lnk}><IoIosArrowBack/></Link></div>) 
        :
          (<div className={styles.topLeftContainer}></div>)
        }
      <div className={styles.topTitle}>{title}</div>
      {bellOrBox===true?
        (<div className={styles.bell}><Bell/></div>) 
        :
          (<div className={styles.box}><Box/></div>)
        }
    </nav>
  )
}
export default topNavigation;