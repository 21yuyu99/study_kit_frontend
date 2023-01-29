import { requestToken } from "@/pages/api/auth/kakao";
import { useRouter } from "next/router";

const Kakao=()=>{
  const routerCode = useRouter().query.code;
  if(typeof(routerCode)==="string"){
    const j = requestToken({routerCode});
    j.then(data=>console.log(data));
  }
  return(
    <>
    </>
  )
}
export default Kakao;