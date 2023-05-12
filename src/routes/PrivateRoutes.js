import React, { useContext } from "react";
import { AuthContext } from "../sharedComponents/UseContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../sharedComponents/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user.uid) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <Navigate to="/login" state={{ from: location }} replace={true} />
      </div>
    );
  }
};

export default PrivateRoutes;
