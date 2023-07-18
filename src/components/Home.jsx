import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Projects from "./Projects";
import Hero from "./Hero";
import Contact from "./Contact";
import Intersection from './Intersection'
import Footer from "./Footer"

export default function Home() {

    return (
        <>
            <Header/>
            <Hero />
            <Main />
            <Intersection
                text='Here are some of my'
                spanText='Projects'
            />
            <Projects />
            <Intersection
                text='Get in'
                spanText='contact'
            />
            <Contact />
            <Footer />
        </>
    )
}