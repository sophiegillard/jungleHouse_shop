import close from '../../assets/images/previous.png';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';
import {useState} from "react";


export const BannerCart = () => {
    return(<div className="fixed top-0 left-0 right-0 z-20">
                        <div className="flex flex-row md:gap-5 p-6 md:p-7 bg-green-logo-very-light">
                            <img src={logo} alt="logo" className="h-10"/>
                            <h1 className="text-2xl font-bold">Jungle House</h1>
                        </div>
                    </div>)
}
