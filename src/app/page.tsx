"use client"

import Image from "next/image";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Homepage/Login";
import { BrowserRouter,Routes,Route,NavLink } from "react-router-dom";
import Welcome from "./components/Homepage/Welcome";
import Usermenu from "./components/userpage/Usermenu";


export default function Home() {
  return (
    <BrowserRouter>
    <main >
    <Routes>

    <Route path="/" element={<Usermenu/>}/>
    <Route path="/homepage" element={<Login/>}/>
    

    

    </Routes>
         </main>

         </BrowserRouter>
  );
}
