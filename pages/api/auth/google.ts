import axios from 'axios';
import { useRouter } from 'next/router';
import cookie from 'react-cookies';

export const requestLogin = ({routerCode}:{routerCode:string})=>{
  return(
    axios.post(`https://www.studykit.site/api/oauth/google`, {
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