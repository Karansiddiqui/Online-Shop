import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import "./App.css";
import "react-toastify/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
