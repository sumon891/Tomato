import React from "react";
import ReactDOM from "react-dom/client";
import {LOGO_URL}  from "../utlis/constants";
import { useState } from "react";


function Header() {

    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL}></img>
                </div>
                <div className="navItems">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <li onClick={()=>{
                            loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                        }
                            
                        }>{loginBtn}</li>
                    </ul>
                </div>
                
            </div>

        </>
    )
}

export default Header;