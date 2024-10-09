
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Register from "./Components/register";
import Footer from "./Components/aboutus";
import Products from "./Components/products";
import Payment from "./Components/payment";
import Cartt from "./Components/cart";
import AddProductForm from './Components/Addproduct';
import Userde from "./Components/userde";



function App() {
  
  return (
    <>
   
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/Footer" element={<Footer/>}/>
  <Route path="/Products" element={<Products/>}/>
  <Route path="/Payment" element={<Payment/>}/>
  <Route path="/cart" element={<Cartt/>}/>
  <Route path="/addproduct" element={<AddProductForm/>}/>
  <Route path="/user" element={<Userde/>}/>
</Routes>
    </>
  );
}

export default App;
