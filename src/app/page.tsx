"use client"

import Image from "next/image";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Homepage/Login";
import { BrowserRouter,Routes,Route,NavLink } from "react-router-dom";
import Welcome from "./components/Homepage/Welcome";


export default function Home() {
  return (
    <BrowserRouter>
    <main className="w-[100vw] h-[100vh] relative">
    <Routes>

    <Route path="/" element={<Homepage/>}/>
    <Route path="/homepage" element={<Login/>}/>
    

    

    </Routes>
         </main>

         </BrowserRouter>
  );
}
