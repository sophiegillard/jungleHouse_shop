import logo from "../../assets/images/logo.png";
import {useState} from "react";
import {ShoppingCart} from "../Cart/ShoppingCart";
import {MenuMobile} from "./MenuMobile.jsx";
import {ErrorBoundary} from "../ErrorBoundary.jsx";
import {Link, NavLink} from "react-router-dom";
import {categoryListMenu} from "../../datas/categoryListMenu.js";

export const NavBar = ({cart, updateCart}) =>{

    return(
        <>
            <nav className="bg-green-logo-light border-gray-200
                        sticky top-0 left-0 right-0 z-30 h-16 pt-2 flex items-center
                        ">
                <div className="flex flex-wrap justify-between items-center mx-auto w-full h-[90%]">
                    {/* Logo Title*/}
                    <Link to="/" className="flex items-center ml-1 sm:ml-6 z-30">
                        <img src={logo} className="mr-1 h-6 sm:h-9"
                             alt="Flowbite Logo"
                        />
                        <span className="text-xl sm:text-2xl font-bold text-green-logo-very-light">Jungle House</span>
                    </Link>
                    {/* END Logo Title*/}

                    <div className="w-full absolute justify-center flex ">
                        <ul className="max-lg:hidden text-gray-shop flex justify-between font-bold text-xl w-[50%]">
                            {categoryListMenu.map(({id, category, link}) =>{
                                if (category === "Accueil"){
                                    return null
                                } else{
                                    return(
                                    <NavLink to={link} className="h-[70%] hover:text-green-logo-very-light my-2" style={({isActive}) => {
                                        return isActive ?
                                            {'border-bottom': "solid 2px #e9efda"}
                                            :
                                            {}
                                    }}
                                             key={id + category}>
                                        {category}
                                    </NavLink>)
                                }
                            }
                            )}

                        </ul>
                    </div>


                    <div className="flex flex-row">

                        <ShoppingCart cart={cart} updateCart={updateCart} />
                        <MenuMobile/>

                    </div>
                </div>
            </nav>
        </>
    )
}