import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{

  return(
        <div className="navbar">
          <div className="logo">Hello</div>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/react">React</Link>
           </ul>
        </div>
  );
};

export default Nav;