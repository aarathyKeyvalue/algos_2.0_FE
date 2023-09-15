import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  const demo = 'demo';

  return (
    <div>{demo}
    <Outlet/></div>
  )
}

export default HomeLayout;