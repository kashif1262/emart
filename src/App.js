//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Product from "./components/Product";

// React router v4 or v5
//<Route path="/" component={Home} />

// // React router v5.1
// <Route exact path="/">
//     <Home />
// </Route>
// // React router v6
// <Route path="/" element={<Home />} />
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />

        {/* <Route path="/products">
          <Products />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
