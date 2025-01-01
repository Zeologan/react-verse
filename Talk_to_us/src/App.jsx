// Note: Here, I have shown how to apply the React useForm hook and how to use the react-hook-form library.
import React, { createContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Slogan from "./Components/Slogan/Slogan";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import './App.css'

export const ContactDataContext = createContext();

function App() {
  return (
    <ContactDataContext.Provider value={{
      phone1: 9876543210,
      phone2: 7891234560,
      email: "Support@TravelGo.com",
      location: "Location"
    }}>
      <Navbar />
      <Slogan />
      <Form />
      <Footer />
    </ContactDataContext.Provider>
  );
}

export default App;
