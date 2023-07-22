import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
    const { cart, clearCart, totalAmount, total } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handlerForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !confirmEmail) {
            setError("Por favor complete todos los campos");
            return;
        }

        if (email !== confirmEmail) {
            setError("Los emails son distintos");
            return;
        }

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: totalAmount,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const currentlyStock = productoDoc.data().stock; 

                await updateDoc(productoRef, {
                    stock: currentlyStock - productoOrden.cantidad
                });
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrderId(docRef.id);
                        clearCart();
                    })
                    .catch((error) => {
                        console.log("Hubo un error al intentar crear la orden", error);
                        setError("Hubo un error al crear la orden");
                    })
            })
            .catch((error) => {
                console.log("Error al intentar actualizar el stock.", error);
                setError("Error al actualizar el stock. Intente nuevamente");
            })

    }


    return (
        <div>
            <h2>CHECKOUT</h2>
            <form onSubmit={handlerForm}>
                {cart.map(producto => (
                    <div key={producto.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio $ {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <p>Total: ${total}</p>
                <hr />

                <div className="styleForm">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="emailConfirmacion">Confirmación Email</label>
                    <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                </div>

                {
                    error && <p> {error} </p>
                }

            <div className="flexEnviar">
                <button className="btnEnviar" type="submit">Enviar</button>
                </div>

            </form>
            {
                orderId && (
                    <p className="styleOrden">Compra con éxito, tu número de orden es {orderId}</p>
                )
            }
        </div>
    )
}

export default Checkout