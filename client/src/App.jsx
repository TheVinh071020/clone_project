import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/Homepage/HomePage";
import Shop from "./Page/Shop/Shop";
import Detail from "./Page/Detail/Detail";
import Cart from "./Page/Carts/Cart";
import Register from "./Page/Register/Register";
import Login from "./Page/Login/Login";
import Pay from "./Page/Pay/Pay";
import PageAdmin from "./Admin/PageHome/PageAdmin"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={<PageAdmin/>}/>
      </Routes>
    </>
  );
}

export default App;
