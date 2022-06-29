import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Api from "./components/Api/Api";
import Conditionals from "./components/Conditionals/Conditionals";
import Contact from "./components/Contact/Contact";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Hooks from "./components/Hooks/Hooks";
import ImportsAndExports from "./components/ImportsAndExports/ImportsAndExports";
import LifeCycle from "./components/LifeCycle/LifeCycle";
import Categories from "./components/React/React";
import Routing from "./components/Routing/Routing";
import Setup from "./components/Setup/Setup";
import StateAndProps from "./components/StateandProps/StateAndProps";
import Terminal from "./components/Terminal/Terminal";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/react" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FrequentlyAskedQuestions />} />
        <Route 
        path="/setup" 
        element={<Setup />} 
        />
        <Route path="/state-props" element={<StateAndProps />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/routing" element={<Routing />} />
        <Route path="/conditionals" element={<Conditionals />} />
        <Route path="/components" element={<LifeCycle />} />
        <Route path="/imports-exports" element={<ImportsAndExports />} />
        <Route path="/api" element={<Api />} />
        <Route path="/terminal" element={<Terminal />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
