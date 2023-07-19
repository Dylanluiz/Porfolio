import React, { startTransition, useContext, useEffect, useRef, useState } from "react";
import { about } from "../data/about-data"
import { ScrollContext } from "../App"
import { FaChevronUp } from 'react-icons/fa'

export default function Main() {
    const { scrollY } = useContext(ScrollContext)
    const [isPastTop, setIsPastTop] = useState(false)
    const screenWidth = window.innerWidth
    let transformXTopper = []
    let transformXDesc = []



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

    useEffect(() => {
        
        if (scrollY > 5) {
            setIsPastTop(prev => prev = true)
        } else {
            setIsPastTop(prev => prev = false)
        }

    }, [scrollY])

    const transformXTopperOptions = screenWidth <= 767 ? transformXTopper = [{ 
        transform: `translateX(${scrollTrack(30, 1, 800, -1)}px)`,  transition: "all 0.3s ease"
    }, 
    {
        transform: `translateX(${scrollTrack(25, 10, 800, -1)}px)`, transition: "all 0.3s ease"
    },
    {
        transform: `translateX(${scrollTrack(15, 12, 800, -1)}px)`, transition: "all 0.3s ease"
    }] 
    : screenWidth >= 768 ?
    transformXTopper = [{ 
        transform: `translateX(${(scrollTrack(20, 1, (screenWidth), -2) / screenWidth) /2 * 100}%)`
    }, 
    {
        transform: `translateX(${(scrollTrack(15, 1, (screenWidth), -2) / screenWidth) /2 * 100}%)`
    },
    {
        transform: `translateX(${(scrollTrack(10, 1, (screenWidth), -2) / screenWidth) /2 * 100}%)`
    }] : null

    const transformXDescOptions = screenWidth <= 767 ? [{}] 
    : screenWidth >=768 ?
    transformXDesc = [{ 
        transform: `translateX(-${(scrollTrack(20, 1, (screenWidth), 1) / screenWidth) /2 * 100}%)`
    }, 
    {
        transform: `translateX(-${(scrollTrack(15, 1, (screenWidth), 1) / screenWidth) /2 * 100}%)`
    },
    {
        transform: `translateX(-${(scrollTrack(10, 1, (screenWidth), 1) / screenWidth) /2 * 100}%)`
    }] : null
        
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

        requestAnimationFrame(scrollTrack)

    const aboutElements = about.map((item, index) =>    
        <article key={index} className={`about-article-${index} fade-side-${index}` } style={scaleStyle[index]}>
            <div className="about--toper" style={transformXTopper[index]}>
                <h5>{item.tag}</h5>
            </div> 
            <div className={`background-joiner-${index}`}></div>
            <p className={`about--desc-${index}`} style={transformXDesc[index]}>
                {item.desc}
                {item.subText && <span>{item.subText}</span>}
            </p>
        </article>)

    return (
        <main>
           {isPastTop && <div onClick={
                () => window.scrollTo({top: 0, behavior: 'smooth'})} 
                className="to-top"><FaChevronUp /></div>}
            <section className="about-section">
                <div className="about-container">
                    {aboutElements}
                </div>
            </section>
        </main>
    )
}

