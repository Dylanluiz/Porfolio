import React, { useContext } from "react";
import '../styles/Circle.css'
import { ScrollContext } from "../App";
import {FaArrowDown} from 'react-icons/fa'

export default function Circle() {
    const spanArrayEl = new Array(15).fill(null)
    const {scrollY} = useContext(ScrollContext)
    const wrapText = ['s', 'c', 'r', 'o', 'l', 'l' ,'*' , 's', 'c', 'r', 'o', 'l', 'l' ,'*', 's', 'c', 'r', 'o', 'l', 'l' ,'*' ]
    

    function transformCircle() {
        const startValue = 0
        const endValue = 3600
        const growRate = 10

        const growSize = startValue + (scrollY * growRate)
        const adjustedGrow = Math.max(startValue, Math.min(growSize, endValue))
        return adjustedGrow
    }
    const styles = { transformOrigin: `0 ${transformCircle()}px`}

    const spanElements = wrapText.map((char, index) => 
        <span style={{transform: `rotate(${index *17}deg)`}}>{char}</span>)

   

    return (
        <div className="circle--main-container">
            <div className="circle-container">
                <div className="logo"><FaArrowDown/></div>
                <div className="rotatingText" style={{transform: `rotate(${transformCircle()}deg)`}}>
                    {spanElements}
                </div>
            </div>
        </div>
    )
}