import axios from "axios";
import { useRouter } from "next/router";
import cookie from 'react-cookies';

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
 export const CommonSignUp = ({id,nickName,pwd}:{id:string,nickName:string,pwd:string})=>{
    return(
      axios.post('https://www.studykit.site:443/api/members/signup',{
    id:id,
    joinAccepted :true,
    nickname : nickName,
    password : pwd
  }).then(()=>CommonSignIn({id,pwd})
  )
    )
 }
 export const CommonSignIn = ({id,pwd}:{id:string,pwd:string})=>{
  return(
    axios.post('https://www.studykit.site:443/api/members/login',{
    id:id,
    password : pwd
  }).then(res=>{
    let expires = new Date();
    expires.setMinutes(expires.getMinutes() + 40);
    cookie.save('accessToken', res.data['data'].accessToken,{
      path:'/',
      expires,
      secure : true,
          });
    expires = new Date();
    expires.setDate(expires.getDate()+7);
    cookie.save('refreshToken', res.data['data'].refreshToken,{
      path:'/',
      expires,
      secure : true,
          });
  axios.defaults.headers['Authorization'] = `${res.data['data'].accessToken}`;
  return true}
  ).catch(()=>
    {return false})
  )
 }

//  export const keepLogin = ()=>{
//   if(axios.defaults.headers['Authorization']===undefined){
//     if(cookie.load('accessToken')!==undefined){
//     axios.defaults.headers['Authorization'] = cookie.load('accessToken');
//     }
//     else{
//       return;
//     }
//   }
//   loginRefresh()
//   setInterval(()=>loginRefresh(),1000*60*29)  
//  }
//  export const loginRefresh = () =>{
//   if(axios.defaults.headers['Authorization']!==undefined){
//     axios.post('https://www.studykit.site:443/api/members/reissue',null,{
//     headers:{Refresh:cookie.load('refreshToken')}
// }).then(res=>
//   {
//     let expires = new Date();
//     expires.setMinutes(expires.getMinutes() + 40);
//     cookie.save('accessToken', res.data['data'].accessToken,{
//       path:'/',
//       expires,
//       secure : true,
//           });
//     expires = new Date();
//     expires.setDate(expires.getDate()+7);
//     cookie.save('refreshToken', res.data['data'].refreshToken,{
//       path:'/',
//       expires,
//       secure : true,
//           });
//   axios.defaults.headers['Authorization'] = `${res.data['data'].accessToken}`;
//   }
//   ).catch(()=>alert("로그인 실패"))
//   }
//  }