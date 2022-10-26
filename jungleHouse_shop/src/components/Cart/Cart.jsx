import close from '../../assets/images/close-button.png';

export const Cart = () => {
    const oliveTreePrice = 25;
    const basilicPrice = 5;
    const cactusPrice = 10;

    return (<div className="cart bg-green-800 w-1/4 flex-col p-7 text-white hidden">
        <button className='flex justify-end '>
            <img src={close} alt="close button" className="h-8"/>
        </button>
        <h3 className='text-xl font-bold mb-2'>Cart</h3>
            <ul className="list-cart 
            space-y-1 max-w-md list-disc list-inside">
                <li>1 Olive Tree {oliveTreePrice}€</li>
                <li>1 Basilic {basilicPrice}€</li>
                <li>1 Cactus {cactusPrice}€</li>
            </ul>
        <p className="total text-xl semifont-bold mt-2 mb-4">Total: {oliveTreePrice+basilicPrice+cactusPrice}€</p>
        <button className="empty cart
        text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Empty the cart
        </button>
    </div>)
}

