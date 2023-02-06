export const requestLogin = ({routerCode}:{routerCode:string})=>{
  const request = fetch(`https://www.studykit.site/api/oauth/google`, {
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