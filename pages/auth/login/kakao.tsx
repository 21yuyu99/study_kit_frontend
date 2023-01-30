import { requestToken, sendData } from "@/pages/api/auth/kakao";
import { useRouter } from "next/router";
import {Navigate} from 'react-router-dom';
import { redirect } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Kakao=()=>{
  const routerCode = useRouter().query.code;
  if(typeof(routerCode)==="string"){
    //const j = requestToken({routerCode});
    //j.then(data=>console.log(data));
    console.log(routerCode);
    const j = sendData({routerCode});
    j.then(data=>console.log(data));                                                                                                        
  }
  return(
   <>
    {/* <Router>
      <Routes>
        <Route path="https://www.naver.com/"></Route>
      </Routes>
    </Router> */}
    </>
  )
}
export default Kakao;