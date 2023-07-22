import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css"

const CartItem = ({ item, cantidad }) => {
  const { deleteProduct } = useContext(CartContext)

  return (
    <div className="flexCartItem">
      <div>
        <h3>Producto: {item.nombre}</h3>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
      </div>
      <div>
        <button className="btnCartItem" onClick={() => deleteProduct(item.id)}> Eliminar </button>
      </div>
    </div>
  )
}

export default CartItem