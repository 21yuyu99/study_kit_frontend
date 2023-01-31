import { sendCode } from "@/pages/api/auth/kakao";
import { useRouter } from "next/router";
import {Navigate} from 'react-router-dom';
import { redirect } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Kakao=()=>{
  const routerCode = useRouter().query.code;
  if(typeof(routerCode)==="string"){
    console.log(routerCode);
    const j = sendCode({routerCode});
    j.then(data=>console.log(data));                                                                                                        
  }
  return(
    <>
    </>
  )
}
export default Kakao;