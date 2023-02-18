// export const requestToken = ({routerCode}:{routerCode:string})=>{
//   const data = {
//     grant_type:"authorization_code", 
//     client_id:process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
//     redirect_uri:process.env.NEXT_PUBLIC_REDIRECT_URI,
//     code:routerCode
//   }
//     const data_url = new URLSearchParams(data).toString();
//     const request = fetch(`https://kauth.kakao.com/oauth/token?${data_url}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
//     },
//   })
//   return request.then(data=>data.json());
//   }

import axios from "axios";
import cookie from 'react-cookies';
  export const requestLogin = ({routerCode}:{routerCode:string})=>{
    return(
      axios.post(`https://www.studykit.site/api/oauth/kakao`, {
      code : routerCode
    })
    .then(res=>
      {
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
    return(res.data['data'].new === true?"new":"old")})
      .catch(()=>{alert("로그인 실패"); return "false"})
    )
  
}