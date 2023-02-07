import axios from "axios";
export const idCheckHandler = (id:string)=>{
  return(
    axios.post('https://www.studykit.site:443/api/members/id',{
    id:id
  })
  )
 }

 export const sendSms = ({phoneNum}:{phoneNum:string})=>{
  return(
    axios.post('https://www.studykit.site:443/sms/send',{
    phoneNumber:phoneNum
  })
  )
 }
 export const verifySms = ({authNum,phoneNum}:{authNum:string,phoneNum:string}) => {
    return(
      axios.post('https://www.studykit.site:443/sms/verify',{
      code : authNum,
      phoneNumber : phoneNum
  }
  )
    )
 }
 export const nicknameCheckHandler = (nickname:string)=>{
  return(
    axios.post('https://www.studykit.site:443/api/members/nickname',{
    nickname : nickname
  })
  )
 }
 export const signUp = ({id,nickName,pwd}:{id:string,nickName:string,pwd:string})=>{
  return(
    axios.post('https://www.studykit.site:443/api/members/signup',{
      id:id,
      joinAccepted :true,
      nickname : nickName,
      password : pwd
    })
  )
 }