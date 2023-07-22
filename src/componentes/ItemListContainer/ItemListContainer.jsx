import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { db } from "../../services/config";
import { collection, getDoc, getDocs, query, where} from 'firebase/firestore';
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  
  const {idCategoria} = useParams();

  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCategoria", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map( doc => {
          const data = doc.data();
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))

  }, [idCategoria])

  
  
  return (
    <div>
        <h2 className="tituloProductos">PRODUCTOS WEPLAY</h2>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer