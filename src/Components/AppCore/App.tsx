import React, {useState} from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from "../HomePage/Home";
import NavBar from "../NavBar/NavBar";
import Resources from "../ResourcesPage/Resources"
import ContactUs from "../ContactUs/ContactUs";

export default function App() {
  const [accessibilityMode, setAccessibilityMode] = useState<string>("");

  return(

    <BrowserRouter>
      <div className={accessibilityMode}>
        <NavBar setAccessibilityMode={setAccessibilityMode}/>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  )
}
