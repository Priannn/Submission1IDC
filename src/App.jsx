import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popular from "./Componnent/Popular";
import { Animeitem } from "./Componnent/Animeitem";
import Homepage from "./Componnent/Homepage";
import { Galery } from "./Componnent/Galery";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<Homepage />} />
      <Route path="/anime/:id" element={<Animeitem/>} />
      <Route path="/character/:id" element={<Galery/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
