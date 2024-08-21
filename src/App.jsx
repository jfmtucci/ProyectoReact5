import "./App.css";
import Cart from "./components/Cart/Cart.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./components/Home/Home.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <NavBar />
      <Home />
      <Footer />
      <Cart />
    </div>
  );
}

export default App;
