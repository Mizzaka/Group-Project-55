import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import Navbar from "./components/navigation/Navbar";
import DashboardPage from "./pages/DashboardPage";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster richColors/>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
