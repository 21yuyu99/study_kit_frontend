import styles from "./midNav.module.scss";
import Link from "next/link";

interface Props {
  title: string;
}

const MidNav = ({title} : Props)=>{
  let leftNavStyle
  let centerNavStyle
  let rightNavStyle
  if (title==='스터디 소개') {
    leftNavStyle = {
      color: 'black',
      borderBottom: 'solid 4px #0091FF'
    }
    centerNavStyle = {
      color: '#9E9E9E',
      borderBottom: 'solid 1px #DBDBDB'
    }
    rightNavStyle = {
      color: '#9E9E9E',
      borderBottom: 'solid 1px #DBDBDB'
    }
  }
  else if (title==='스터디원') {
    leftNavStyle = {
      color: '#9E9E9E',
      borderBottom: 'solid 1px #DBDBDB'
    }
    centerNavStyle = {
      color: 'black',
      borderBottom: 'solid 4px #DFB144'
    }
    rightNavStyle = {
      color: '#9E9E9E',
      borderBottom: 'solid 1px #DBDBDB'
    }
  }
  else if (title==='게시판') {
    leftNavStyle = {
      color: '#9E9E9E',
      borderBottom: 'solid 1px #DBDBDB'
    }
    centerNavStyle = {
      color: '#9E9E9E',
      borderBottom: 'solid 1px #DBDBDB'
    }
    rightNavStyle = {
      color: 'black',
      borderBottom: 'solid 4px #C94E38'
    }
  }
  return(
    <nav className={styles.navContainer}>
      <Link href='/studyIntro' className={styles.navLeft} style={leftNavStyle}>스터디 소개</Link>
      <Link href='/studyMember' className={styles.navCenter} style={centerNavStyle}>스터디원</Link>
      <Link href='/studyBoard' className={styles.navRight} style={rightNavStyle}>게시판</Link>
    </nav>
  )
}
export default MidNav;