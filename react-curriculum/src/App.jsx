import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Exp";
import Help from "./components/Contato";

function App() {
  return (
    <div>
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="help" element={<Help />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
