import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Navigate, Route } from "react-router-dom";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Navigate>
        <Route excet path="/" component={Home} />
        <Route excet path="/products" component={Products} />
        <Route excet path="/about" component={About} />
        <Route excet path="/contact" component={Contact} />
        <Route excet path="/login" component={Login} />
        <Home />
      </Navigate>
    </div>
  );
}

export default App;
