import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Index from "./page/Index";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 w-full start-0">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
