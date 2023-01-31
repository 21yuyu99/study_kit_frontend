export const requestToken = ({routerCode}:{routerCode:string})=>{
  const data = {
    grant_type:"authorization_code", 
    client_id:process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
    redirect_uri:process.env.NEXT_PUBLIC_REDIRECT_URI,
    code:routerCode
  }
    const data_url = new URLSearchParams(data).toString();
    const request = fetch(`https://kauth.kakao.com/oauth/token?${data_url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  })
  return request.then(data=>data.json());
  }

  export const requestLogin = ({routerCode}:{routerCode:string})=>{
    const request = fetch(`https://www.studykit.site/api/oauth/kakao`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      "code" : routerCode
    }
    )
  })
  return request.then(data=>data.json());
}