import { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, total, totalAmount } = useContext(CartContext);

    if (totalAmount === 0) {
        return (
            <>
                <h2 className="h2CartEmpty">¡Ups! Tu carrito está vacio</h2>
                <div className="flexLinkCart">
                    <Link className="linkCart" to="/">Ver catalogo completo</Link>
                </div>
            </>
        )
    }
    return (
        <>
            <h2 className="h2Cart">¡ Tu carrito !</h2>
            {cart.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className="flexCart">
                <h3 className="h3Total">Total: ${total}</h3>
                <h4 className="h4CantidadTotal">Cantidad Total: {totalAmount}</h4>
                <div className="flexBtnCart">
                    <button className="btnClearCart" onClick={() => clearCart()}>Vaciar Carrito</button>
                    <Link className="btnFinalizarCompra" to="/checkout">Finalizar Compra</Link>
                </div>
            </div>
        </>
    )
}

export default Cart