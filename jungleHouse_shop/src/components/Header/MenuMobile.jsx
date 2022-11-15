import {useState} from "react";
import menu from "../../assets/images/menu.png";
import {Link} from "react-router-dom";

export const MenuMobile = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return isMenuOpen? (
        <>
            <button type="button" onClick={()=>setIsMenuOpen(false)}
                    className=" px-2 md:hidden"
                    aria-controls="navbar-default" aria-expanded="false">
                <img alt ="Shopping Cart" className="relative h-8 sm:h-12 cursor-pointer" src={menu}/>
            </button>

            <div className="top-20 w-screen md:w-1/2 lg:w-1/3 h-[95vh] right-0 absolute" id="navbar-default">
                <ul className="flex flex-col text-center font-bold text-xl p-4 mt-4 bg-white shadow-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                    <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                           aria-current="page">Home
                    </Link>
                    <Link to="/Plantes"
                          className="block py-2 pr-4 pl-3 rounded hover:bg-button-return bg-cover md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:text-white text-gray-400">Plantes
                    </Link>
                    <li>
                        <a href="#"
                           className="block py-2 pr-4 pl-3 rounded hover:bg-button-return bg-cover md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:text-white text-gray-400">Jardin</a>
                    </li>
                    <li>
                        <a href="#"
                           className="block py-2 pr-4 pl-3 rounded hover:bg-button-return bg-cover md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:text-white text-gray-400">Meubles</a>
                    </li>
                    <li>
                        <a href="#"
                           className="block py-2 pr-4 pl-3 rounded hover:bg-button-return bg-cover md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:text-white text-gray-400">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    ) :  <>
        <button type="button" onClick={()=>setIsMenuOpen(true)}
                className=" px-2 md:hidden"
                aria-controls="navbar-default" aria-expanded="false">
            <img alt ="Shopping Cart" className="relative h-8 sm:h-12 cursor-pointer" src={menu}/>
        </button>
    </>
}