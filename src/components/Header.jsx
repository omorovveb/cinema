import React, { useContext, useState } from "react";
import LOGO from "../img/netflix.png";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../context";

function Header() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => setValue(e.target.value);

  const navigateToResult = () => {
    navigate(`/movies/search-result/${value}`);
    setValue("");
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <Link to={"/"}>
              <img src={LOGO} width={100} alt="" />
            </Link>
          </div>
          <nav className="header-nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/top_rated"}>Top Rated</Link>
            <Link to={"/popular"}>Popular</Link>
          </nav>
          <div className="search-movies">
            <input
              value={value}
              onChange={handleChange}
              placeholder="search"
              type="text"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  navigateToResult();
                }
              }}
            />
            <button onClick={navigateToResult}>search</button>
          </div>
          <div className="header-buttons">
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="en-US">English</option>
              <option value="ru-RU">Русский</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
