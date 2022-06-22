import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiCupLine } from "react-icons/ri";
import { GiClapperboard } from "react-icons/gi";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { DiVisualstudio } from "react-icons/di";
import { Link } from 'react-router-dom';

function Sidebar() {

  return (
    <div className="side-bar">

      <nav className="side-bar-header">
        <div>
          <h3>
            <DiVisualstudio />
            MEDIA HD
          </h3>
        </div>
        <div>
          <AiOutlineCaretLeft style={{ width: "10px" }} />
          <GiHamburgerMenu />
        </div>
      </nav>

      <div>
        <div className="sidebar-links">
          <div className="side-bar-link">
            <AiOutlineHome />
            <Link to='/' className="a" >Discover</Link>
          </div>
          <div className="side-bar-link">
            <GiClapperboard />
            <Link to='/new-releases' className="a" >New Releases</Link>
          </div>
          <div className="side-bar-link">
            <RiCupLine />
            <Link to='/upcoming' className="a" >Upcoming</Link>
          </div>
          <div className="side-bar-link">
            <AiOutlineHeart />
            <Link to='/favorites' className="a" >Favorites</Link>
          </div>
        </div>
        <div className='side-bar-container'>
          <div><h6>Genre</h6></div>
          <p>Action</p>
          <p>Documentary</p>
          <p>Comedy</p>
          <p>Horror</p>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
