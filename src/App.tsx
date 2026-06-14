import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import LocaleLayout from "./components/LocaleLayout";
import RootRedirect from "./components/RootRedirect";
import LegacyRedirect from "./components/LegacyRedirect";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { ContactModalProvider } from "./contexts/ContactModalContext";
import "./App.css";

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<RootRedirect />} />

            <Route path="/about" element={<LegacyRedirect />} />
            <Route path="/services" element={<LegacyRedirect />} />
            <Route path="/services/:slug" element={<LegacyRedirect />} />
            <Route path="/industries" element={<LegacyRedirect />} />
            <Route path="/projects" element={<LegacyRedirect />} />
            <Route path="/careers" element={<LegacyRedirect />} />
            <Route path="/contact" element={<LegacyRedirect />} />
            <Route path="/terms" element={<LegacyRedirect />} />
            <Route path="/privacy" element={<LegacyRedirect />} />

            <Route path="/:lang" element={<LocaleLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="industries" element={<Industries />} />
              <Route path="projects" element={<Projects />} />
              <Route path="careers" element={<Careers />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="terms" element={<TermsAndConditions />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="*" element={<LegacyRedirect />} />
          </Routes>
        </Layout>
      </Router>
    </ContactModalProvider>
  );
}

export default App;
