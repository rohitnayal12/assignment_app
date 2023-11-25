import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContextProvider';




function PrivateRoute({ children }) {

  const {isAuth}=useContext(AuthContext)

  return isAuth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
