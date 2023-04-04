import { Fragment } from "react";
import {Outlet} from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  console.log('layout')
  return (
    <Fragment>
      {/* <Header></Header> */}
      <Outlet/> {/* Outlet is not a “real” Component, it is imported from react-router-dom. it will be replaced by the element rendered by the route */}
      <Footer/>
    </Fragment>
  )
}
export default Layout