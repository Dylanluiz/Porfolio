import React, { useContext } from "react";
import Circle from "./Circle";


export default function Hero() {

    const contact = () => {
        window.scrollTo({top:2500, behavior: 'smooth'})
    }


    return (
        <section className="hero">
            <div className="hero--background">
                <div className="hero--blob1"></div>
                <div className="hero--blob2"></div>
            </div>
            <div className="hero--title-container">
                <h1 className="hero--title">Hi. I'm Dylan.</h1>
                <h1 className="hero--title-sub">A <span>frontend developer</span></h1>
            </div>
            <p className="hero--intro">
                Welcome to my showcase portfolio, please have a look around.
            </p>
            <a onClick={() => contact()} className="hero--contact">Contact</a>
            <Circle />
        </section>
    )
}