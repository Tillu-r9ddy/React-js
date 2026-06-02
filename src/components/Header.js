import { useState } from "react";
import { APP_HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const[lgnLgtBtn, setLgnLgtBtn] = useState("Login");
    return(
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={APP_HEADER_LOGO}/>
        </div>

        <div className="nav-items">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contactus">Contact us</Link>
                <Link to="/cart">Cart</Link>
                <button
                    onClick={() => {
                        setLgnLgtBtn(lgnLgtBtn === "Login"
                            ?"Logout"
                            :"Login"
                        )
                    }}
                >
                    {lgnLgtBtn}
                </button>
            </ul>
        </div>
        </div>
    );
};

export default Header;