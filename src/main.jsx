import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Battleship from "./Battleship";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Battleship />
  </StrictMode>
);
