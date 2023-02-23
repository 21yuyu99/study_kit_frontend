import TopNavigation from "@/components/topNavigation";
import CommentCard from "@/components/commentCard";
import styles from "@/styles/studyBoard/showSingle.module.scss";
const ShowSingle = ()=>{
  return(
    <>
    <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
    <main className={styles.main}>
      <CommentCard nickName={"장석준"} content={"10주차 숙제 피드백 불참하여 벌금 제출했습니다."} date={"2023.02.23"} reply={1}/>
    </main>
    </>
  )
}
export default ShowSingle;