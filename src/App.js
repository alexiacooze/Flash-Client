import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Advanced from "./components/Advanced/Advanced";
import Api from "./components/Api/Api";
import Conditionals from "./components/Conditionals/Conditionals";
import Css from "./components/Css/Css";
import DomManipulation from "./components/DomManipulation/DomManipulation";
import ElementsAttributes from "./components/ElementsAttributes/ElementsAttributes";
import Es6 from "./components/Es6/Es6";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Hooks from "./components/Hooks/Hooks";
import HtmlBasics from "./components/HtmlBasics/HtmlBasics";
import HtmlCss from "./components/HtmlCss/HtmlCss";
import HtmlForms from "./components/HtmlForms/HtmlForms";
import Javascript from "./components/Javascript/Javascript";
import JsAdvanced from "./components/JsAdvanced/JsAdvanced";
import JsBasic from "./components/JsBasic/JsBasic";
import Categories from "./components/React/React";
import Responsive from "./components/Responsive/Responsive";
import Routing from "./components/Routing/Routing";
import Scss from "./components/Scss/Scss";
import Setup from "./components/Setup/Setup";
import StateAndProps from "./components/StateandProps/StateAndProps";
import Terminal from "./components/Terminal/Terminal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/html" element={<HtmlCss />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/react" element={<Categories />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/state-props" element={<StateAndProps />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/routing" element={<Routing />} />
        <Route path="/conditionals" element={<Conditionals />} />
        <Route path="/api" element={<Api />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/html-basics" element={<HtmlBasics />} />
        <Route path="/elements-attributes" element={<ElementsAttributes />} />
        <Route path="/forms" element={<HtmlForms />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/css" element={<Css />} />
        <Route path="/responsive-design" element={<Responsive />} />
        <Route path="/sass" element={<Scss/>} /> 
        <Route path="/js-basic" element={<JsBasic/>} /> 
        <Route path="/dom" element={<DomManipulation/>} /> 
        <Route path="/es6" element={<Es6/>} /> 
        <Route path="/js-advanced" element={<JsAdvanced/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
