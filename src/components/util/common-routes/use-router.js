import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";

/**
 * Higher-Order Component to inject location, params, and navigate into a component.
 *
 * @param {React.Component} Component - The component to wrap.
 * @returns {React.Component} The wrapped component.
 */
const withRouterProps = (Component) => {
  const ComponentWithRouter = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  };

  return React.memo(ComponentWithRouter);
};

export default withRouterProps;
