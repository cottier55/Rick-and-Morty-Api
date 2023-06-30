import SearchBar from "../searchbar/SearchBar";
import {Link} from "react-router-dom";
import style from "./navbar.module.css";


export default function Navbar({onSearch, random}) {
  return (
    <div className={style.navContainer}>
  
      <div>
        <button className={style.aboutButton}>
        <Link to={'/about'} className={style.aboutLinkButton}>About</Link>
        </button>

        <button className={style.homeButton}>
          <Link to={"/home"} className={style.homeLinkButton}>Home</Link>
        </button>

        <button className={style.favoritesButton}>
        <Link to={"/favorites"} className={style.favoritesLinkButton}>Favs</Link>
        </button>
        
      </div>

      <SearchBar onSearch={onSearch} />

      <button className={style.random} onClick={random}>
        ADD RANDOM
      </button>
    </div>
  );
}
