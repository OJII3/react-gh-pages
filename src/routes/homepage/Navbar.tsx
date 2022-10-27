import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{

  return(
        <div className="navbar">
          <div className="logo">Hello</div>
           <ul className="nav-links">
              <Link to="/homepage/home">Home</Link>
              <Link to="/react">React</Link>
           </ul>
        </div>
  );
};

export default Navbar;