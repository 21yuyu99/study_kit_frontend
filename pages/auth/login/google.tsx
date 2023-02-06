import { requestLogin } from "@/pages/api/auth/google";
import { useRouter } from "next/router";

const Google=()=>{
  const routerCode = useRouter().query.code;
  if(typeof(routerCode)==="string"){
    const login = requestLogin({routerCode});
    login.then(data=>console.log(data));                                                                                                        
  }
  return(
    <>
    </>
  )
}
export default Google;