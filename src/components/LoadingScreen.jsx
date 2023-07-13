import React, { useEffect, useState } from "react";

export default function LoadingScreen({delay, text, isFlicker}) {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] =useState(0)
    const [flickerLast, setFlickerLast] = useState(true)

    useEffect(() => {
        
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prevText => prevText + text[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, delay)

            return () => {
                clearTimeout(timer)
                
            }
        } else if (isFlicker) {
            const flicketTimer = setInterval(() => {
                setFlickerLast(prevFlicker => !prevFlicker)
            }, 400);

            return () => {
                clearTimeout(flicketTimer)
                setCurrentIndex(0)
                setDisplayText('')
            }
        } else {
            setFlickerLast(false)
        }

    }, [currentIndex, text, delay, isFlicker])

       const  flickeringChar = flickerLast ? text[text.length - 1] : ''

    return (
        <section className="loading-screen">
            <h2 className="loading-letter">{displayText}{isFlicker ? flickeringChar : ''}</h2>
        </section>
    )
} 