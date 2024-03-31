import { CiMenuBurger } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import "./index.css"

const Header = () => (
    <nav className="navDesign">
        <div className="top-header-container">
            <h1 className="logo-heading">BookUsNow</h1>
            {/* <div className="category-container"> */}
            <button type="button" className="category-container">
                <CiMenuBurger className="icons" />Categories</button>
            {/* </div> */}
            <div className="seach-container">
                <input type="search" placeholder="Dji phantom" className="search-input" />
                <IoIosSearch className="icons" />
            </div>
            <button className="fav-container">
                <MdOutlineFavoriteBorder className="icons" />
                Favorities

            </button>
            <button type="button" className="sign-button">Sign In</button>
        </div>

        <div className="bottom-header-conatainer">
            <div className="location-container">
                <IoLocationOutline className="icons" />
                <p className="location-head">Mumbai,India
                </p>
                <FaAngleRight />
            </div>
            <ul className="ul-container">
                <li>Live Shows</li>
                <li>Streams</li>
                <li>Movies</li>
                <li>Plays</li>
                <li>Events</li>
                <li>Sports</li>
                <li>Activities</li>
                
            </ul>
        </div>

    </nav>
)

export default Header