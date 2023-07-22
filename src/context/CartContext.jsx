import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalAmount: 0,
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    console.log(cart);

    const addProduct = (item, cantidad) => {
        const existingProduct = cart.find(prod => prod.item.id === item.id);

        if(!existingProduct) {
            setCart(prev => [...prev, {item, cantidad}])
            setTotalAmount(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const updatedCart = cart.map(prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad}
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            setTotalAmount(prev => prev + cantidad);
            setTotal(prev => (item.precio * cantidad));
        }
    }

    const deleteProduct = (id) => {
        const productDeleted = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);
        setCart(updatedCart);
        setTotalAmount(prev => prev - productDeleted.cantidad);
        setTotal(prev => prev - (productDeleted.item.precio * productDeleted.cantidad));
    }

    const clearCart = () => {
        setCart([]);
        setTotalAmount(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{cart, total, totalAmount, addProduct, deleteProduct, clearCart}}>
            {children}
        </CartContext.Provider> 
    )
}