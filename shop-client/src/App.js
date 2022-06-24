import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Views/Home";
import Cart from "./Views/Cart";
import SingleItem from "./Views/SingleItem";
import Nav from "./components/nav/Nav";
import Back from "./components/nav/Back";
import Side from "./components/nav/Side";
function App() {
  const [side, setSide] = useState(false);
  return (
    <div className="App">
      <Router>
        <Nav click={() => setSide(true)} />
        <Back show={side} off={() => setSide(false)} />
        <Side side={side} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="item/:id" element={<SingleItem />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
