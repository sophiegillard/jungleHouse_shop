import {Link} from "react-router-dom";

export const CategoryHome = () =>{
const categoryList =[
    {
    id: 'cat1',
    category: 'Noël',
    image: './src/assets/images/noel.jpg'
    },
    {
    id: 'cat2',
    category: 'Plantes',
    image: './src/assets/images/plantes.jpg'},
    {
    id: 'cat3',
    category: 'Jardin',
    image: './src/assets/images/jardinage.jpg'},
    {
    id: 'cat4',
    category: 'Meuble',
    image: './src/assets/images/meubles.jpg'},
];


    return (<>
            {categoryList.map(({id, category, image})=>
                <Link to={category} className="card max-w-[40%] flex flex-col gap-2 mt-6" key={id+category}>
                    <div className="h-24 w-24 overflow-hidden rounded-full">
                        <img src={image} alt={category}
                             className=" max-w-[100%] h-full w-full object-cover rounded-full  hover:scale-110 transition duration-700 ease-in-out"/>
                    </div>
                    <p className="text-center font-bold text-gray-shop">{category}</p>
                </Link>

            )}
    </>
    )
}