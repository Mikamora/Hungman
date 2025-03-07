import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import DailyGame from "./pages/DailyGame/DailyGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/game" element={<DailyGame />} />
          <Route path="/unlimited" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
