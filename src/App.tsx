import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
