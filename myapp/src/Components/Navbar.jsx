import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' , backgroundColor:'skyblue'}}>
      <Link to="/" style={{textDecoration:"none" ,fontWeight:"bold"}}>Login</Link>   
      <Link to="/home"  style={{textDecoration:"none",fontWeight:"bold"}}>Home</Link>
    </div>
  );
}

export default Navbar;
