import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CartContainer from "./components/CartContainer";
import Register from "./views/Register";
import Login from "./views/Login";
import Pizza from "./views/Pizza";
import Footer from "./components/Footer";
import "./App.css";
import NotFound from "./views/NotFound";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<CartContainer></CartContainer>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/pizza" element={<Pizza></Pizza>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
          <Route path="/Perfil" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;