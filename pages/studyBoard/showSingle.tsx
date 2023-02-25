import TopNavigation from "@/components/topNavigation";
import CommentCard from "@/components/commentCard";
import styles from "@/styles/studyBoard/showSingle.module.scss";
const ShowSingle = ()=>{
  const comment = [
    {
      id: 1,
      nickname: '윤다인',
      isHead: false,
      content: "10주차 숙제 피드백 불참하여 벌금 제출했습니다.",
      date: "2023.02.23",
      nestedCommentNum: 1,
      nestedComment: [
        {
          id: 1,
          nickName: "강상우",
          isHead : true,
          content : "확인하였습니다.",
          date : "2023.02.23",
         },
      ]
    }, {
      id: 2,
      nickname: '윤다인',
      isHead: false,
      content: "10주차 숙제 피드백 불참하여 벌금 제출했습니다.",
      date: "2023.02.23",
      nestedCommentNum: 0,
    },
  ]
  return(
    <>
    <TopNavigation title={"토익 뽀개기"} backSpace={true} rightIcon={"bell"} backgroundStyle={2}></TopNavigation>
    <main className={styles.main}>
    {comment.map(x => <CommentCard key={x.id} nickName={x.nickname} isHead={x.isHead} content={x.content} date={x.date} nestedCommentNum={x.nestedCommentNum} 
    nestedComment={{
      key: 1,
      nickName: "강상우",
      isHead: true,
      content: "확인하였습니다.",
      date: "2023.02.23"
    }}/>)}
    </main>
    </>
  )
}
export default ShowSingle;