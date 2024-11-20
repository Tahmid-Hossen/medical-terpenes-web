import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {appTitle, siteTitleSuffix} from "./Globals.js";

export const TitleManagement = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      document.title = "Dashboard" + siteTitleSuffix;
    } else if (pathname.startsWith("/login")) {
      document.title = "Login" + siteTitleSuffix;
    } else if (pathname.startsWith("/products")) {
      document.title = "Products" + siteTitleSuffix;
    } else if (pathname.startsWith("/categories")) {
      document.title = "Categories" + siteTitleSuffix;
    } else if (pathname.startsWith("/attribute")) {
      document.title = "Attribute" + siteTitleSuffix;
    } else if (pathname.startsWith("/orders")) {
      document.title = "Orders" + siteTitleSuffix;
    } else if (pathname.startsWith("/customers")) {
      document.title = "Customers" + siteTitleSuffix;
    } else if (pathname.startsWith("/wholesale")) {
      document.title = "Wholesale" + siteTitleSuffix;
    } else if (pathname.startsWith("/banners")) {
      document.title = "banners" + siteTitleSuffix;
    } else if (pathname.startsWith("/salesPromotion")) {
      document.title = "Sales Promotion" + siteTitleSuffix;
    } else if (pathname.startsWith("/post")) {
      document.title = "Post" + siteTitleSuffix;
    } else if (pathname.startsWith("/shipping")) {
      document.title = "Shipping" + siteTitleSuffix;
    } else if (pathname.startsWith("/settings")) {
      document.title = "Settings" + siteTitleSuffix;
    } else {
      document.title = appTitle;
    }

  }, [pathname]);

  return null;
}