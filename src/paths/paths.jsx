import { createBrowserRouter } from "react-router";
import CredentialForm from "../components/LandingPage";
import BattleGround from "../BattleGround";
import RegisteringCoordinates from "../components/RegistringCoordinates";

let router = createBrowserRouter([
  { element: <CredentialForm />, path: "/" },
  { element: <BattleGround />, path: "/BattleGround/:id" },
  { element: <RegisteringCoordinates />, path: "/RegisteringCoordinates" },
]);

export default router;
