import React from 'react';
import { Route } from "wouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Index from "./pages/index";
import AppHome from "./pages/app";
import Diagnosis from "./pages/diagnosis";

export default function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <main>
        <Route path="/">
          <Index />
        </Route>
        <Route path="/app">
          <AppHome />
        </Route>
        <Route path="/diagnosis">
          <Diagnosis />
        </Route>
      </main>
      <Footer />
    </div>
  );
}
