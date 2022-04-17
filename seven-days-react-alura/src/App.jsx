import { BrowserRouter, Route, Routes } from "react-router-dom";
import Depositions from "./components/Depositions";
import HowDo from "./components/HowDo";
import MyCart from "./components/MyCart";
import Offers from "./components/Offers";
import Videos from "./components/Videos";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/como-fazer" element={<HowDo />} />
          <Route exact path="/ofertas" element={<Offers />} />
          <Route exact path="/depoimentos" element={<Depositions />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/meu-carrinho" element={<MyCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
