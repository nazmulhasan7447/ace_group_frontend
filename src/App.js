import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import { BankingFinanceServices } from "./components/bankingFinance";
import Contact from "./components/Contact/Contact";
import Corporate from "./components/Discover/Corporate/Corporate";
import Home from "./components/Home/Home";
import InsightDetails from "./components/InsightsAll/InsightDetails/InsightDetails";
import InsightsAll from "./components/InsightsAll/InsightsAll";
import {
  AcceleratorNetwork,
  Asiacyberx,
  Automobile,
  Corporation,
  PicturesEntertainment,
} from "./components/otherServices";
import People from "./components/People/People";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import NotFound from "./components/shared/NotFound/NotFound";
import BASE_URL from "./utils/BaseURL";

export const AppContext = createContext();

function App() {
  const [contextData, setContextData] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/api-site-logo/`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setContextData((prevData) => ({ ...prevData, logos: result }));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <AppContext.Provider value={{ contextData, setContextData }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="insights" element={<InsightsAll />} />
          <Route path="insights/:id" element={<InsightDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="discovery" element={<Corporate />} />
          <Route path="services/:id" element={<BankingFinanceServices />} />
          <Route path="services/corporation" element={<Corporation />} />
          <Route path="services/asiacyberx" element={<Asiacyberx />} />
          <Route
            path="services/accelerator-network"
            element={<AcceleratorNetwork />}
          />
          <Route path="services/automobile" element={<Automobile />} />
          <Route
            path="services/pictures-entertainment"
            element={<PicturesEntertainment />}
          />
          <Route path="people/:id" element={<People />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer section */}
        <Footer />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
