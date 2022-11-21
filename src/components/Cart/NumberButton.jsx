export const NumberButton = ({cart, updateCart}, id, image, name, price, amount) => {

    const handleDecrement = (cart, id, image, name, price, amount) =>{
        const isThisPlant = cart.find(plant => plant.id === id);
        if (isThisPlant){
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { id, image, name, price, amount : isThisPlant.amount - 1}
            ])
        }
    }


    const handleIncrement = (cart, id, image, name, price, amount) =>{
        const isThisPlant = cart.find(plant => plant.id === id);
        if (isThisPlant){
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { id, image, name, price, amount : isThisPlant.amount + 1}
            ])
        }
    }

return <div className="h-10 w-28 ">
    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button data-action="decrement"
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
            <span className="m-auto text-2xl font-thin"
                  onClick={() => handleDecrement(cart, id, image, name, price, amount)}
            >−</span>
        </button>
        <span className="justify-center w-full bg-gray-300 font-semibold focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
               >{amount}</span>
        <button data-action="increment"
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
            <span className="m-auto text-2xl font-thin"
                  onClick={() =>handleIncrement(cart, id, image, name, price, amount)}
                    >+</span>
        </button>
    </div>
</div>
}