import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Accueil from "./pages/accueil/Accueil";
import Header from "./components/Header/Header";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ConfigProvider } from "antd";
import Apropos from "./pages/apropos/Apropos";
import Portofolio from "./pages/portofolio/Portofolio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/Header/MobileNav";
import Loader from "./components/Loader";
import DetailsProject from "./pages/detailsProject/DetailsProject";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import ProjectsContext, {
  ProjectContextInterface,
} from "./context/ProjectsContext";
import BaseURL from "./config";

function App() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<any[] | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      const response = axios
        .get(BaseURL + "/api/projects?populate=*")
        .then((res) => {
          setLoading(false);
          setProjects(res.data.data);
        })
        .catch((error) => {
          console.error("Une erreur est survenue lors de la demande:", error);
          // Gérer l'erreur ici (par exemple, afficher un message d'erreur à l'utilisateur)
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const contextView: ProjectContextInterface = {
    projects,
    setProjects: setProjects,
  };
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
      <ProjectsContext.Provider value={contextView}>
        <div className="App">
          {loading && <Loader />}
          {!loading && (
            <>
              <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
              <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Accueil />} />
                  <Route path="/apropos" element={<Apropos />} />
                  <Route path="/portofolio" element={<Portofolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/detail/:id" element={<DetailsProject />} />
                </Routes>
              </AnimatePresence>
              <Footer />
            </>
          )}
        </div>
      </ProjectsContext.Provider>
    </ConfigProvider>
  );
}

export default App;
