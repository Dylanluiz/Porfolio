import React, { startTransition, useContext, useEffect, useState } from "react";
import { about } from "../data/about-data";
import Projects from "./Projects";
import { ScrollContext } from "../App";

export default function Main() {
    const { scrollY } = useContext(ScrollContext)
    const [isComplete, setIsComplete] = useState(false)

    const scrollTrack = (num, startPosTransform, endingValue, startPos) => {
        const startValue = startPos
        const endValue = endingValue
        const increment = num
        const startScale = startPosTransform

        const scaledScrollY = startValue + (scrollY * increment)
        const adjustedScrollY = Math.max(startValue, Math.min(scaledScrollY, endValue))

        if (scrollY > startScale) {
            return adjustedScrollY
        } else {
            return startValue
        } 
    }

    const scaleStyle = [
        {
            transform: `scale(${scrollTrack(0.005, 3, 1, 0.98)})`, transition: "all 0.4s ease"
        },
        {
            transform: `scale(${scrollTrack(0.003, 10, 1, 0.98)})`, transition: "all 0.4s ease"
        },
        {
            transform: `scale(${scrollTrack(0.002, 12, 1, 0.98)})`, transition: "all 0.4s ease"
        }]


    const transformX = [{
        transform: `translateX(${scrollTrack(30, 1, 500, -1)}px)`,  transition: "all 0.3s ease"
    }, 
    {
        transform: `translateX(${scrollTrack(25, 10, 500, -1)}px)`, transition: "all 0.3s ease"
    },
    {
        transform: `translateX(${scrollTrack(15, 12, 500, -1)}px)`, transition: "all 0.3s ease"
    }]

    const aboutElements = about.map((item, index) =>    
        <article key={index} className={`about-article-${index} fade-side-${index}` } style={scaleStyle[index]}>
            <div className="about--toper" style={transformX[index]}>
                <h5>{item.tag}</h5>
            </div> 
            <p className="about--desc">
                {item.desc}
                {item.subText && <span>{item.subText}</span>}
            </p>
        </article>)

    return (
        <main>
            <section className="about-section">
                <div className="about-container">
                    {aboutElements}
                </div>
            </section>
        </main>
    )
}

