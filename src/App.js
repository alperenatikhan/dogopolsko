import React from "react";
import "./styles.css";
import Header from "./Header.js";
import ResultsRender from "./ResultsRender.js";
import ScrollToTop from "./ScrollToTop.js";

export default function App() {
  return (
    <section className="mainPage">
      <Header />
      <ResultsRender />
      <ScrollToTop />
    </section>
  );
}
