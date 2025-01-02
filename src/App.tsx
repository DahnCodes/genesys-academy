import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navigationbar from './Components/Navigationbar'
import LandingPage from "./Pages/LandingPage";
import Productdesign from "./Pages/Productdesign";
import Frontend from "./Pages/Frontend";
import Backend from "./Pages/Backend";
import Dataanalysis from "./Pages/Dataanalysis";
import Qualityassurance from "./Pages/Qualityassurance";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/productdesign" element={<Productdesign/>}/>
    <Route path="/frontend" element={<Frontend/>}/>
    <Route path="/backend" element={<Backend/>}/>
    <Route path="/dataanalysis" element={<Dataanalysis/>}/>
    <Route path="/qualityassurance" element={<Qualityassurance/>}/>
    <Route path="/contactus" element={<Contact/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/pathways" element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
