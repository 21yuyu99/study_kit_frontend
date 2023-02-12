import styles from '@/styles/studyMember/management.module.scss'
import TopNavigation from '@/components/topNavigation';
import PlusMan from '@/public/img/plusMan.svg'
import { ApplyMember } from '@/components/member/apply';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function StudyMember(){
  const [toggle,setToggle] = useState(true);
  const onClickToggle = ()=>{
    if(toggle === true){
      setToggle(false);
    }
    else{
      setToggle(true);
    }
  }
  return(
  <>
  <TopNavigation title={"가입 신청 관리"} backSpace={true} rightIcon={""} backgroundStyle={1}></TopNavigation>
  <main className={styles.main}>
   <div className={styles.buttonContainer}>
      <PlusMan/>
      {toggle===true?
      <><div className={styles.buttonText}>
          <div className={styles.buttonTitle}>
            <h3>신규 스터디원 모집 중</h3> 
          </div>
          <p>모집을 중지하려면 버튼을 토글하세요</p>
        </div></>:
      <><div className={styles.buttonText}>
          <div className={styles.buttonTitle}>
            <h3>스터디원 모집 중지</h3> 
          </div>
          <p>새로 모집하려면 버튼을 토글하세요</p>
        </div></>}
      <div className={toggle===true?`${styles.toggleSwitch_on}`:`${styles.toggleSwitch_off}`} onClick={()=>onClickToggle()}>
        <div className={toggle===true?`${styles.toggleButton_on}`:`${styles.toggleButton_off}`}></div>
      </div>
    </div>
    <ApplyMember nickName={'가나다'} level={4} time={1}
      intro={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      q1={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      q2={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      ischeck={false}/>
    <ApplyMember nickName={'가나다'} level={4} time={3} 
      intro={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      q1={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      q2={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      ischeck={true}/>
    <ApplyMember nickName={'가나다'} level={4} time={3} 
      intro={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      q1={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      q2={'안녕하세요. 영어 공부하려고 가입한 홍길순이에요.  혼자서는 도저히 공부가 안되네요. 받아주시면 감사하겠습니다 ㅠ'} 
      ischeck={false}/>
  </main>
  </>
  )
}