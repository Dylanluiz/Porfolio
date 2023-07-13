import React, { createContext, useEffect, useState } from "react";
import Home from "./components/Home";
import ProjectInfo from "./components/ProjectInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./../server"

const ScrollContext = createContext()

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scalingFactor = 0.1
      const scaledScrollY = window.scrollY * scalingFactor
      setScrollY(scaledScrollY)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const value = {scrollY}
  
  return (  
        <ScrollContext.Provider value={value}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/projects/:id' element={<ProjectInfo/>} />
            </Routes>
          </BrowserRouter>
        </ScrollContext.Provider>   
  )
}

export { ScrollContext }
