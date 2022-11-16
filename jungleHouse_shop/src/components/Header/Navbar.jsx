import logo from "../../assets/images/logo.png";
import {useState} from "react";
import {ShoppingCart} from "../Cart/ShoppingCart";
import {MenuMobile} from "./MenuMobile.jsx";
import {ErrorBoundary} from "../ErrorBoundary.jsx";
import {Link} from "react-router-dom";

export const NavBar = ({cart, updateCart}) =>{

    return(
        <>
            <nav className="bg-green-logo-light border-gray-200 py-6
                        sticky top-0 left-0 right-0 z-20">
                <div className="flex flex-wrap justify-between items-center mx-auto w-[90%]">
                    {/* Logo Title*/}
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-1 h-6 sm:h-9"
                             alt="Flowbite Logo"
                        />
                        <span className="text-xl sm:text-2xl font-bold text-white">Jungle House</span>
                    </Link>
                    {/* END Logo Title*/}

                    <div className="flex flex-row">

                        <ShoppingCart cart={cart} updateCart={updateCart} />
                        <MenuMobile/>

                    </div>
                </div>
            </nav>
        </>
    )
}