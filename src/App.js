import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Assets from "./Pages/Assets.jsx";
import Messages from "./Pages/Messages";
import Booking from "./Pages/Booking.jsx";
import BuyCars from "./Pages/BuyCars.jsx";
import Calender from "./Pages/Calender.jsx";
import SellCars from "./Pages/SellCars.jsx";
import Services from "./Pages/Services.jsx";
import Settings from "./Pages/Settings.jsx";
import Logout from "./Pages/Logout.jsx";
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>

      
      <Header></Header>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Assets" element={<Assets />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/SellCars" element={<SellCars />} />
            <Route path="/BuyCars" element={<BuyCars />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Calender" element={<Calender />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Logout" element={<Logout />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </Sidebar>
    </Router>
    </>
  );
}

export default App;

