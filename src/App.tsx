import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import CovidAlert from "./Components/CovidAlert";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Router from "./Pages/Router";
import useScript from "./Utils/UseScript";

declare global {
  interface Window {
    Email: any;
  }
}

function App() {
  useScript(
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
  );

  return (
    <ChakraProvider>
      <div className="App">
        <CovidAlert />
        <Header />
        <Router />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
