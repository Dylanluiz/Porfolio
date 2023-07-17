import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Projects from "./Projects";
import Hero from "./Hero";
import Contact from "./Contact";

export default function Home() {

    return (
        <>
            <Header/>
            <Hero />
            <Main />
            <Projects />
            <Contact />
        </>
    )
}