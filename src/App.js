import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { AppShell } from "./components/AppShell";
import { Footer } from "./components/Footer";
import React from "react";
import { BrowserRouter } from "react-router";

const App = () => {
  const [headerHeight, setHeaderHeight] = React.useState(480);

  React.useEffect(() => {
    const handleScroll = () => {
      const calculatedHeight =
        window.scrollY <= 420 ? 480 - window.scrollY : 60;
      setHeaderHeight(calculatedHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Header headerHeight={headerHeight} />
      <Navbar />
      <AppShell />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
