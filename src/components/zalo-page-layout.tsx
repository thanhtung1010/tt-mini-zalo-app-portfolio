import React from "react";
import NavigationBar from "./navigation-bar";
import { useSetRecoilState } from "recoil";
import { userState } from "../state";
import { getUserInfo } from "zmp-sdk";

const ZaloPageLayout = (props: any) => {
  let loginError: any = undefined;
  const setUser = useSetRecoilState(userState);

  getUserInfo()
  .then(
    resp => {
      if (resp.userInfo) {
        setUser(resp.userInfo);
      }
    }
  ).catch(
    error => {
      console.error(error)
      loginError = error;
    }
  )
  return (
    loginError
    ? <div>
        <p>Login Error!!!</p>
        <p>{loginError || {}}</p>
      </div>
    : <section className="tt-pagelayout">
        {props.children}
        <NavigationBar></NavigationBar>
      </section>
   );
}
 
export default ZaloPageLayout;