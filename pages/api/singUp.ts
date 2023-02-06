import axios from "axios";
export const idCheckHandler = (id:string)=>{
  axios.post('https://www.studykit.site:443/api/members/id',{
    id:id
  })
  .then(data=>console.log(data))
  .catch(error=>console.log(error));
 }

 export const sendSms = ({phoneNum}:{phoneNum:string})=>{
  axios.post('https://www.studykit.site:443/sms/send',{
    phoneNumber:phoneNum
  })
  .then(data=>console.log(data));
 }
 export const verifySms = ({authNum,phoneNum}:{authNum:string,phoneNum:string}) => {
    axios.post('https://www.studykit.site:443/sms/verify',{
    code : authNum,
    phoneNumber : phoneNum
  }
  )
  .then(data=>console.log(data))
  .catch(error=>console.log(error));
 }