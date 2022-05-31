import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../HomePage/Home";
import NavBar from "../NavBar/NavBar";
import Resources from "../ResourcesPage/Resources"

export default function App() {
  const [accessibilityMode, setAccessibilityMode] = useState<string>("");

  return(
    <div className={accessibilityMode}>
      <NavBar setAccessibilityMode={setAccessibilityMode}/>
    <Router>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/resources" element={<Resources/>}/>
        </Routes>
    </Router>
    </div>
  )
}
