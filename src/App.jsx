import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import FutureGoals from "./pages/FutureGoals";
import About from "./pages/About";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/futuregoals" element={<FutureGoals />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
