import TopNavigation from "@/components/topNavigation";
import styles from "@/styles/studyBoard/ShowSingle.module.scss";
const ShowSingle = ()=>{
  return(
    <>
    <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
    <main className={styles.main}>
    </main>
    </>
  )
}
export default ShowSingle;
