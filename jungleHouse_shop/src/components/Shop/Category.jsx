import {plantList} from "../../datas/plantList.js";
import {useMemo} from "react";

export const Category = ({categories, activeCategory, setCategory}) =>{


    return (<div className="p-7 pt-24 flex justify-center">

        <label className="sr-only" htmlFor="plant-category">Choississez une catégorie:</label>

        <select className="block py-2.5 px-0 text-sm text-gray-500 bg-transparent
        border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700
        focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                name="plants" id="plant-select"
                value={activeCategory}
                onChange={(e)=>setCategory(e.target.value)}>
            <option value="">--Choisir une catégorie--</option>
            {categories.map((category, index) =>
                <option key={`${category}-${index}`} value={`${category}`}>
                    {category}
                </option>
            )}
        </select>


    </div>)
}