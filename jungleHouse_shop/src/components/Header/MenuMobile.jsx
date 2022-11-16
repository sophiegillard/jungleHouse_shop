import {useState} from "react";
import menu from "../../assets/images/menu.png";
import {Link} from "react-router-dom";
import {categoryListMenu} from "../../datas/categoryListMenu.js";

export const MenuMobile = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return isMenuOpen? (
        <>
            <button type="button" onClick={()=>setIsMenuOpen(false)}
                    className=" px-2 md:hidden"
                    aria-controls="navbar-default" aria-expanded="false">
                <img alt ="Shopping Cart" className="relative h-8 cursor-pointer" src={menu}/>
            </button>

            <div className="top-20 w-screen md:w-1/2 lg:w-1/3 bg-white right-0 absolute flex justify-center" id="navbar-default">
                <ul className="flex flex-col h-[90vh] w-[90%] text-center justify-center font-bold text-xl  s:px-10
                divide-y divide-gray-shop
                md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">


                    {categoryListMenu.map(({id, category,link, image})=>
                        <Link to={link} className="group card flex flex-row items-center gap-6" key={id+category}>
                            <div className=" overflow-hidden rounded-full h-16 w-16 xxs:w-20 my-3 xxs:my-8">
                                <img src={image} alt={category}
                                     className="h-full w-full object-cover self-center rounded-full  group-hover:scale-110 transition duration-700 ease-in-out
                             "/>
                            </div>
                            <p className="text-center font-bold text-gray-shop xs:text-xl tracking-wider uppercase ">{category}</p>
                        </Link>
                    )}

                    {/*<Link to="/" className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0 text-gray-400"
                           aria-current="page">
                        Accueil
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
                    </li>*/}
                </ul>
            </div>
        </>
    ) :  <>
        <button type="button" onClick={()=>setIsMenuOpen(true)}
                className=" px-2 md:hidden"
                aria-controls="navbar-default" aria-expanded="false">
            <img alt ="Shopping Cart" className="relative h-8 cursor-pointer" src={menu}/>
        </button>
    </>
}