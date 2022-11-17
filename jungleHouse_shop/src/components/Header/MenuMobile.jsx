import {useState} from "react";
import menu from "../../assets/images/menu.png";
import {Link} from "react-router-dom";
import {categoryListMenu} from "../../datas/categoryListMenu.js";

export const MenuMobile = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <>
            {!isMenuOpen ? (
                //If menu is closed
                <>
                    <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="buttonMenu px-2 lg:hidden"
                            aria-controls="navbar-default" aria-expanded="false">
                        <img alt="Shopping Cart" className="relative h-8 cursor-pointer" src={menu}/>
                    </button>
                </>
                ) :
                //if menu is open
                (<>
                <button type="button" onClick={()=>setIsMenuOpen(!isMenuOpen)}
                className="buttonMenu px-2 lg:hidden"
                aria-controls="navbar-default" aria-expanded="false">
                <img alt ="Shopping Cart" className="relative h-8 cursor-pointer z-20" src={menu}/>
                </button>
                </>)
            }

        <>
            <div id="menuMobile" className={`top-16 w-screen h-[91vh] md:w-1/2 lg:w-1/3 bg-white right-0 absolute flex flex-row justify-center z-10
                sm:h-[95vh] 
                md:shadow-xl md:h-screen md:top-0
                lg:hidden
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-700`}>
                <ul className="flex flex-col h-[100%] w-[80%] text-center justify-around font-bold text-xl  s:px-10 pb-6
                 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:w-full">

                    {categoryListMenu.map(({id, category, link, image}) =>
                        <Link to={link} className="group card flex flex-row items-center gap-6 h-[70%]" key={id + category}
                        onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                            <div className=" overflow-hidden rounded-full max-h-[60%] h-[60%] min-w-[40%] w-[40%]
                            sm:h-[80%] sm:max-h-[70%] sm:min-w-[30%] sm:w-[30%]
                            sm:h-[80%] sm:max-h-[70%] md:min-w-[40%] md:w-[40%]">
                                <img src={image} alt={category}
                                     className="h-full w-full object-cover self-center rounded-full  group-hover:scale-110 transition duration-700 ease-in-out"/>
                            </div>
                            <p className="text-center font-bold text-gray-shop text-2xl tracking-wider uppercase ">{category}</p>
                        </Link>
                    )}
                </ul>
            </div>
            {!isMenuOpen ?null: <div className="max-md:hidden lg:hidden h-screen w-screen bg-white-shade absolute inset-0 z-100"></div> }
        </>
    </>
}