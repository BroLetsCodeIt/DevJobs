import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
import JobAnalysis from "./pages/JobAnalysis";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analysis" element={<JobAnalysis />}/>
      </Routes>
    </>
  );
}

export default App;
