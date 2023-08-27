import { useState } from "react";

const useCartHook = () => {
    const [cart, setCart] = useState([])

    const handleGetDb = () => {
        const init = JSON.parse(localStorage.getItem('shopping-cart')) || []
        return init;
    }
    // add items to local storage and cart state
    const handleAddToCart = (item) => {
        const storedCart = JSON.parse(localStorage.getItem('shopping-cart')) || [];
        const isAlredyAdded = storedCart.find(pd => pd.id === item.id)
        if (isAlredyAdded) {
            alert('You can not add more than one product')
        }
        else {
            const newCart = [...storedCart, item]
            localStorage.setItem('shopping-cart', JSON.stringify(newCart))
            setCart(newCart)
        }
    }

    const handleRemoveFromDb = (id) => {
        const storedCart = JSON.parse(localStorage.getItem('shopping-cart'))
        const remaining = storedCart.filter(product => product.id !== id)
        localStorage.setItem('shopping-cart', JSON.stringify(remaining))
    }

    return { cart, handleAddToCart, handleRemoveFromDb, handleGetDb }
}

export default useCartHook;