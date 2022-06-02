import React, {useState} from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from "../HomePage/Home";
import NavBar from "../NavBar/NavBar";
import Resources from "../ResourcesPage/Resources"
import ContactUs from "../ContactUs/ContactUs";
import WhatIsFNSSA from "../AboutUs/WhatIsFNSSA";
import './AppCore.css'
import Statement from "../AboutUs/Statement";

export default function App() {
  const [accessibilityMode, setAccessibilityMode] = useState<string>("");

  return(

    <BrowserRouter>
      <div className={accessibilityMode}>
        <NavBar setAccessibilityMode={setAccessibilityMode}/>
        <div className="webpage-content">
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/fnssa" element={<WhatIsFNSSA/>}/>
          <Route path="/statement" element={<Statement/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}
