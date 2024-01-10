import React from "react";
import { createRoot } from "react-dom/client";
import MainApp from "./mainapp";

function App() {

  return <MainApp />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
