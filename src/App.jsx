import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popular from "./Componnent/Popular";
import { Animeitem } from "./Componnent/Animeitem";
import Homepage from "./Componnent/Homepage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/anime/:id" element={<Animeitem/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
