const title = {
  title:"스터디 제목",
  subTitle:"스터디의 제목을 지어주세요. 필수 항목입니다."
}
const deadline = {
  title:"목표 기한",
  subTitle:"스터디를 진행할 목표 기한을 설정해주세요."
}
const memberNum = {
  title : "인원 설정",
  subTitle : "스터디에 참여할 인원을 설정해주세요.\n최대 인원은 50명까지 입니다.",
}
const tag = {
  title : "태그 남기기",
  subTitle : "스터디를 설명할 수 있는 태그를 남겨주세요. 띄어쓰기로 구분해주세요."
}
const onOff = {
  title : "대면/ 비대면",
  subTitle : "스터디 진행 형태에 맞추어 체크해주세요. 필수 항목입니다."
}
export const it = [
  title,deadline,memberNum,
  { title : "사용 언어",
  subTitle : "스터디를 진행할 언어를 설정해주세요. 필수 항목입니다.",
  },
  { title : "사용 도구",
  subTitle : "스터디에서 사용할 도구를 설정해주세요. 필수 항목입니다.",
  },
  tag,onOff
]
export const job = [
  title,deadline,memberNum,
  {
    title : "사용 목적",
    subTitle : "스터디를 진행하는 목적을 기입해주세요. 필수 항목입니다."
  },
  tag,onOff
]
export const introStepContent =[
  {
    number : 1,
    title : "스터디 소개",
    subTitle : "스터디에 대한 간단한 소개글을 작성해주세요."
  },
  {
    number : 2,
    title : "QnA",
    subTitle : "스터디 참가자들에게 간단한 질문을 해주세요."
  },
  {
    number : 3,
    title : "스터디 개설 완료!",
    subTitle : "스터디 개설의 마지막 단계입니다!\n아래의 개설 버튼을 눌러 스터디 개설을 완료해주세요!"
  }
]