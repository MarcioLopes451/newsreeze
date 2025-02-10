import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/newsreeze/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
