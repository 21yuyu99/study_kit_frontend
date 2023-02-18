import { requestLogin } from "@/pages/api/auth/google";
import { useRouter } from "next/router";

const Google= ()=>{
  const router = useRouter();
  const routerCode = router.query.code;
  if(typeof(routerCode)==="string"){
    const callApi = async() =>{
      const loginResult = await requestLogin({ routerCode });
    if(loginResult==="new"){
      router.push("/newStudy?login=new");
    }
    else if(loginResult==="old"){
      router.push('/myStudy');
    }
    else{
      router.push('/');
    }
    }
    callApi();
  }
  return(
    <>
    </>
  )
}
export default Google;