import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);

  const imgCarrito = '../public/images/carrito.png'
  return (
    <div>
      <Link to="/cart">
        <img className='carritoImg' src={imgCarrito} alt="Imagen del Carrito" />
        {
          totalAmount > 0 && <strong className='strongEstilo'> {totalAmount} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget