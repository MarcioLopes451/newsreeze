import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import Channels from "./pages/Channels/Channels";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/newsreeze/" element={<Hero />} />
        <Route path="/newsreeze/channels/:name" element={<Channels />} />
      </Routes>
    </>
  );
}

export default App;
