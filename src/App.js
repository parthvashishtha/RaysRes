//Routing Done Below

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import HomePage from "./pages/Home.js";
import AboutPage from "./pages/About.js";
import ContactPage from "./pages/Contact.js";
import "./App.css";
import ChatWidget from "./components/chatbot/chatbot.jsx";
import "./i18n.js";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ margin: 0, padding: "67px 0 0 0" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <ChatWidget />
      <Footer />
    </Router>
  );
}

export default App;
