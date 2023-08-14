import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/cart" element={<Cart/> }/>
          </Routes>                    
      </Router>
    </Provider>
  );
}

export default App;
