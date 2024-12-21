import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./Globalstyle.jsx";

// Ambil elemen dengan ID 'root'
const rootElement = document.getElementById("root");

// Gunakan createRoot untuk merender aplikasi
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);