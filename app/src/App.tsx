import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import User from "./pages/UserPage";
import Group from "./pages/GroupPage";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/:id" element={<User />} />
      <Route path="group/:id" element={<Group />} />
    </Routes>
  </BrowserRouter>
);

export default App;
