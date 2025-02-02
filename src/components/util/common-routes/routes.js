import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/index"
import { Projects } from "../../pages/projects";
import { Experience } from "../../pages/experience";
import { ContactUs } from "../../pages/contact";
import withRouterProps from "./use-router";
import { SocialIcons } from "../social-icons/index";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const AnimatedRoutes = withRouterProps(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <SocialIcons />
    </div>
  );
}

export default AppRoutes;
