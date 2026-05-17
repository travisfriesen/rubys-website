import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./app/layout";
import Home from "./app/page";
import Golf from "./app/golf/page";
import MiniGolf from "./app/minigolf/page";
import Arcade from "./app/arcade/page";
import HotdogCart from "./app/hotdogcart/page";
import BeachHouse from "./app/beachhouse/page";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/golf" element={<Golf />} />
          <Route path="/minigolf" element={<MiniGolf />} />
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/hotdogcart" element={<HotdogCart />} />
          <Route path="/beachhouse" element={<BeachHouse />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
