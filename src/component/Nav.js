import React, {useState} from "react";
import { TbSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const style = { color: "white" };

const Nav = () => {
  const [search, setSearch] = useState([]);
  return (
    <nav>
      <div className="navigation-searchbar">
        <div className="search-bar-section">
          <div className="search-bar-input">
            <Link to={`/search/${search}`}><TbSearch/></Link>
            <input
              type="search"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="profile">
          <IoSettingsOutline style={style} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
