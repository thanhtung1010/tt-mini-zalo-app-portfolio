import React from "react";
import NavigationBar from "./navigation-bar";

const PageLayout = (props: any) => {
  return ( 
    <section className="tt-pagelayout">
      {props.children}
      <NavigationBar></NavigationBar>
    </section>
   );
}
 
export default PageLayout;