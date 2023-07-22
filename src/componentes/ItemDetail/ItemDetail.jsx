import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {addProduct} = useContext(CartContext);

    const handlerCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        const item = {id, nombre, precio};
        addProduct(item, cantidad);
    }

    return (
        <div className='divDetail'>
            <h2 className="h2Detail">{nombre} </h2>
            <img className="imgDetail" src={img} alt={nombre}/>
            <h3 className="h3Detail">Precio: ${precio}</h3>
            <h4 className="h4Detail"> Podes pagar con: VISA, MasterCard, Cabal, Naranja y MercadoPago</h4>
            <p className="pDetail">Todos nuestro productos cuentan con 6 meses de garantía brindados por la fábrica extensible por nosotros hasta un máximo de 2 años</p>
            <h5 className="h5Detail">Código de Producto: {id}</h5>

            {
                agregarCantidad > 0 ? 
                    (<> <Link className="linkSeguir" to="/">Seguir Comprando</Link> <Link className="btnFinalizarCompra" to={"/cart"}>Finalizar Compra</Link> </>)
                 : (<ItemCount stock={stock} inicial={1} funcionAgregar={handlerCantidad}/>)
            }
        </div>
    )
}

export default ItemDetail