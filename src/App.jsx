import React from "react"
import { BasicExample, Bmw, Main, Main2} from "./Components"
import { Toyota } from "./Components/Toyota"
import { BmwImage } from "./Components/BmwImage"
import { posts } from "./Components/Posts"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Main/>} />
     <Route path="/page2" element={<Main2 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
