import styles from "./topNavigation.module.scss";
import Bell from '@/public/img/bell.svg';
import Box from '@/public/img/box.svg';
import Back from '@/public/img/back.svg';
import Link from "next/link";

interface Props {
  title: string
  backSpace: boolean;
  rightIcon: string;
}

const topNavigation = ({title, backSpace, rightIcon} : Props)=>{
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
  else if (title=="회원가입") {
    lnk = "/"
  }
  let icon
  if (rightIcon=="bell"){
    icon = <Bell/>
  }
  else if (rightIcon=="box"){
    icon = <Box/>
  }
  return(
    <nav className={styles.top}>
      {backSpace===true?
        (<div className={styles.back}><Link href={lnk}><Back/></Link></div>) 
        :
          (<div className={styles.topLeftContainer}></div>)
        }
      <div className={styles.topTitle}>{title}</div>
      <div className={styles.icon}>{icon}</div>
    </nav>
  )
}
export default topNavigation;