import React from "react";
import { Navbar } from "./sections/Navbar";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <h1 className="text-2xl text-white underline">hello</h1>
      <Hero />
    </main>
  );
};

export default App;
