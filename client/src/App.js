import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Cancel from "./pages/Cancel";


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />
      </Routes>
    </BrowserRouter>
    // <ProductList />
    // <Product />
    // <Signup />
    // <Login />
    // <Cart />
  );
};

export default App;
