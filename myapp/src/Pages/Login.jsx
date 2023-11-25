import React, { useContext } from "react";
import { AuthContext } from "../Components/AuthContextProvider";


const Login = () => {
  
  const { setIsAuth}=useContext(AuthContext)
  const handleLogin = () => {
    setIsAuth(true);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" placeholder="type your email" />
      <br/>
      <input type="text" placeholder="type your password" />
      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
