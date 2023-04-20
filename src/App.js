import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/HeaderBanner";
import Services from "./components/ServicesSection";
import ContactForm from "./components/ContactFormSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <ContactForm />
    </div>
  );
}

export default App;
