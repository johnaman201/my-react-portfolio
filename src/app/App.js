import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import "./App.css";
import HeaderNav from "../components/header";
import withRouterProps from "../components/util/common-routes/use-router";
import AppRoutes from "../components/util/common-routes/routes";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouterProps(_ScrollToTop);


export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <HeaderNav/>
        <AppRoutes/>
      </ScrollToTop>
    </Router>
  );
}
