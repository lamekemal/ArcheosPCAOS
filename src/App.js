import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OpenPrivacy from "./privacy-open";
import Home from "./Home";
import Bumper from "./Bumper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/openapps-privacy" element={<OpenPrivacy />} />
        <Route exact path="/merged-apps" element={<Bumper />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
