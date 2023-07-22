import { Fragment, useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock, inicial, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial)

    const incrementarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="flexContador">
                <button className="botonDisminuir" onClick={disminuirContador}> - </button>
                <p className="contadorEstilo"> {contador} </p>
                <button className="botonIncrementar" onClick={incrementarContador}> + </button>
            </div>
            <button className="btnCount" onClick={ () => funcionAgregar(contador)}> Agregar al Carrito </button>
        </>
    )
}

export default ItemCount