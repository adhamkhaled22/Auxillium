import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Login from "./Login";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./Home";
import Signup from "./Signup";
import SurveyApp from "./SurveyApp"
import SurveyAppESI from "./SurveyAppESI" 
import SurveyAppDIS from "./SurveyAppDIS"
import Upload from "./Upload"
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="Home" element={<Home/>} />
      <Route path="Signup" element={<Signup />} />
      <Route path="SurveyApp" element={<SurveyApp />}/>
      <Route path="SurveyAppESI" element={<SurveyAppESI />}/>
      <Route path="SurveyAppDIS" element={<SurveyAppDIS />}/>
      <Route path="Upload" element={<Upload />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
