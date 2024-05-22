import React from "react";
import './App.css';
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Show from "./Show";
import Register from "./Register";
import Hotel from "./Hotel";
import Bookaroom from "./bookroom";
import Reschedule from "./Reschedule"
import FetchHotel from "./FetchHotel";

import FetchBookings from "./FetchBookings";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <li className="nav-item">
              <Link className="navbar-brand" to="/Show">
                BonStay
              </Link>
            </li>
          </div>
        </nav>
        <Routes>
          <Route path="/Show" element={<Show />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Hotel" element={<Hotel />}></Route>
          <Route path="/BookARoom" element={<Bookaroom />}></Route>
          <Route path="/Reschedule" element={<Reschedule />}></Route>
          <Route path="/FetchHotel" element={<FetchHotel />}></Route>
          <Route path="/FetchBookings" element={<FetchBookings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
