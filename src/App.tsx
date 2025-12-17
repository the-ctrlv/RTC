import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
