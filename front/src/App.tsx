import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Accueil from "./pages/accueil/Accueil";
import Header from "./components/Header/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Apropos from "./pages/apropos/Apropos";
import Portofolio from "./pages/portofolio/Portofolio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/Header/MobileNav";
import Loader from "./components/Loader";

function App() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#323232",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#323232",
          colorTextPlaceholder: "gray",
        },
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <div className="App">
            <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
            <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />}></Route>
              <Route path="/portofolio" element={<Portofolio />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </ConfigProvider>
  );
}

export default App;
