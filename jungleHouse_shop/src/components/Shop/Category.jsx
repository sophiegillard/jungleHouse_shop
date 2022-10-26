import {plantList} from "../../datas/plantList.js";

export const Category = () =>{
    //acc = accumulator
        const categories = plantList.reduce((acc, plant)=>
        acc.includes(plant.category)? acc : acc.concat(plant.category),
        []
    );

    return (<div className="p-7 pt-24 flex justify-center">

        <label className="sr-only" htmlFor="plant-category">Choose a category:</label>
        <select className="block py-2.5 px-0 text-sm text-gray-500 bg-transparent
        border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700
        focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                name="plants" id="plant-select">
            <option value="">--Please choose a category--</option>
            {categories.map((category, index) =>
                <option key={`${category}-${index}`} value={`${category}`}>
                    {category}
                </option>
            )}
        </select>
    </div>)
}