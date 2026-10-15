// src/App.tsx
import { BrowserRouter } from "react-router";
import Menu from "./componentes/menu";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}