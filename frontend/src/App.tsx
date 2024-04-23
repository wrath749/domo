import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chatting from "./pages/Chatting";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chatting" element={<Chatting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
