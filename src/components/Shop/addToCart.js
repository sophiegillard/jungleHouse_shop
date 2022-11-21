export const addToCart= (cart, updateCart, id, image, name, price) => {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
        const cartFilteredCurrentPlant = cart.filter(
            (plant) => plant.name !== name
        )
        updateCart([
            ...cartFilteredCurrentPlant,
            { id, image, name, price, amount : currentPlantSaved.amount + 1}
        ])
    } else {
        updateCart([...cart, { id, image, name, price, amount : 1}])
    }
}