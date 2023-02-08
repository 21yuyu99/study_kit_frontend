import styles from '../styles/newStudy.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import StudyTypeBar from '@/components/studyTypeBar';
import StudyCard from '@/components/studyCard';
import TopNavigation from '@/components/topNavigation';
import BottomNavigation from '@/components/bottomNavigation';
import { useState } from 'react';
import Plus from 'public/img/plus.svg';
import Link from 'next/link'
import { IsOKBox, IsOkMsg } from '@/components/msgBox';
import { useRouter } from 'next/router';
export default function NewStudy(){
  const [search,setSearch] = useState("");
  const [signUpMsg,setsignUpMsg] = useState(true);
  const login = useRouter().query.login;
 return(
  <>
  <TopNavigation title={"새 스터디"} backSpace={false} rightIcon={"bell"}></TopNavigation>
  <main className={styles.main}>
    <div className={styles.banner}>
      <div className={styles.bannerText}>
      <div className={styles.bannerTitle}>
          <h3>원하는 스터디가 없다면?</h3><h3>스터디장이 될 차례!</h3>
        </div>
       <p><Link href="/createStudy/selectTemplate">스터디키트가 떠먹여주는 스터디 만들기 &gt;</Link></p>
      </div>
      <div className={styles.pencil}>✏️</div>
    </div>
    <form action="" method="GET" className={styles.searchBox}>
      <input value={search} onChange={e=> setSearch(e.target.value)} type="text" placeholder='스터디주제, 이름 검색'></input>
      <button type="submit" className={styles.searchButton}><AiOutlineSearch size="20"/></button>
    </form>
    <StudyTypeBar/>
    <StudyCard typeName={"언어"} starStatus={true} cardTag={['#문제풀이',' #실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <StudyCard typeName={"기타"} starStatus={true}cardTag={['#문제풀이',' #실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={40}></StudyCard>
    <StudyCard typeName={"자격증"} starStatus={false}cardTag={['#문제풀이',' #실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={20}></StudyCard>
    <StudyCard typeName={"취/창업"} starStatus={false}cardTag={['#문제풀이',' #실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={40}></StudyCard>
    <StudyCard typeName={"프로젝트"} starStatus={false}cardTag={['#문제풀이',' #실습']} cardTitle="오픽 자격증 따기" cardPeriod='12월 18일~(27일째 스터디 중)' progressStatus={80}></StudyCard>
    <Link href="/createStudy/selectTemplate" className={styles.a}>
      <div className={styles.createStudyContainer}>
        <Plus/>
        <div className={styles.createStudyText}>
          <div className={styles.createStudyTitle}>
            <h3>새 스터디 만들기</h3>
          </div>
          <p>원하는 스터디가 없다면? 스터디장이 될 차례!</p>
        </div>
      </div>
    </Link>
    <div className={styles.noSearchResult}>더이상 검색결과가 없습니다</div>
    {login==="new"&&
    (
      <span className={styles.msgContainer}>
      <IsOKBox status = {signUpMsg} setStatus = {setsignUpMsg} message="회원가입을 완료했습니다."></IsOKBox>
    </span>
    )}
  </main>
  <BottomNavigation location={"새스터디"}/>
  </>
 )
}