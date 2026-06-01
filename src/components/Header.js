import { useState } from "react";
import { APP_HEADER_LOGO } from "../utils/constants";

const Header = () => {
    const[lgnLgtBtn, setLgnLgtBtn] = useState("Login");
    return(
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={APP_HEADER_LOGO}/>
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
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