import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BattleGround from "./BattleGround";
import CredentialForm from "./components/LandingPage";
import { RouterProvider } from "react-router";
import router from "./paths/paths";

function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
