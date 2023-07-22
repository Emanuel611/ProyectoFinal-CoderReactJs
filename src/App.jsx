import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout"

const App = () => {
  return (
    <>
      <BrowserRouter>

        <CartProvider>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />

            <Route path="/item/:idItem" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart/>} />

            <Route path="/checkout" element={<Checkout/>} />
          </Routes>

        </CartProvider>

      </BrowserRouter>
    </>
  )
}

export default App