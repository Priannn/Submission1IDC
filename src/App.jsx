import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popular from "./Componnent/Popular";
import { Animeitem } from "./Componnent/Animeitem";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Popular />} />
      <Route path="/anime/:id" element={<Animeitem/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
