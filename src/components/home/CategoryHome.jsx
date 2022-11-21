import {Link} from "react-router-dom";
import {categoryListHome} from "../../datas/categoryListHome.js";


export const CategoryHome = () =>{



    return (<>
            {categoryListHome.map(({id, category, image})=>
                <Link to={category} className="card max-w-[43%] 2xl:max-h-[40%] flex flex-col gap-1 lg:gap-6
                max-md:justify-center md:items-center md:max-h-[45%] lg:max-h-[90%]
                lg:max-w-[25%]" key={id+category}>
                    <div className="min-h-[80px] max-h-[60%] h-[70%] overflow-hidden rounded-full
                    md:min-h-[90%] md:min-w-[70%] md:w-[70%] 2xl:min-h-[200%]
                    ">
                        <img src={image} alt={category}
                             className="h-full w-full object-cover rounded-full  hover:scale-110 transition duration-700 ease-in-out
                             "/>
                    </div>
                    <p className="text-center font-bold text-gray-shop xs:text-xl lg:text-4xl tracking-wider">{category}</p>
                </Link>

            )}
    </>
    )
}