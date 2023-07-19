import React, { useEffect, useState, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import {FaCode} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
    const [name, setName] = useState('Dylan Luiz')
    const [nameR, setNameR] = useState('Dylan Luiz')
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [isClicked, setIsClicked] = useState(false)
    const [activeItem, setActiveItem] = useState(null)
    const dropDownItems =["About", "Projects", "Contact", 'LinkedIn', 'CV', 'Email']
    const dropDownFunctions = [
        () => {
        setIsClicked(prev => !prev)
        scrollTo({top: 400, behavior: 'smooth'})}
        ,
        () => {
            setIsClicked(prev => !prev)
            scrollTo({top: 920, behavior: "smooth"})
        }
        ,
        () => {
            setIsClicked(prev => !prev)
            scrollTo({top: 2500, behavior: "smooth"})
        }
    
    ]
    const docBody = document.body

    function textChange() {
      let iterations = 0
      const interval = setInterval(() => {
            setName(prevName => prevName = prevName.split('')
            .map((letter, index) => {
                if (index < iterations) {
                    return nameR[index]
                }
                return letters[Math.floor(Math.random() * letters.length)]})
            .join(''))

            if (iterations >= name.length) {
                clearInterval(interval) 
                
                }
            iterations += 1 / 3
        }, 30)
        
    }

    function sendEmail() {

    }

    function addClasses() {
        setIsClicked(prevClicked => !prevClicked)
    }

    const liElements = dropDownItems.map((item, index) => {
        
        if (item === 'Email') {
            return (
                <a className="drop-down-links" href="mailto:dylan.luiz0@gmail.com"><li 
                className={`drop-down-list-items ${activeItem === index && 'is-hovered'}` } 
                onMouseOver={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                onClick={() => sendEmail()}
                key={item}>{item}</li></a>
            )
        } else if (item === 'CV') {
           return (
           <a className="drop-down-links" href="https://www.linkedin.com/in/dylan-luiz-58a17a216/" target="_blank"><li 
            className={`drop-down-list-items ${activeItem === index && 'is-hovered'}` } 
            onMouseOver={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
            onClick={dropDownFunctions[index]}
            key={item}><Link to='/resume'>{item}</Link></li></a>)
        } else if (item === 'LinkedIn') {
            return (
            <a className="drop-down-links" href=""><li 
            className={`drop-down-list-items ${activeItem === index && 'is-hovered'}` } 
            onMouseOver={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
            onClick={dropDownFunctions[index]}
            key={item}>{item}</li></a>)
        } else  {
            return ( 
            <a className="drop-down-links"><li 
            className={`drop-down-list-items ${activeItem === index && 'is-hovered'}` } 
            onMouseOver={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
            onClick={dropDownFunctions[index]}
            key={item}>{item}</li></a>)
        }
     
       
    })

    
    function noScoll() {
       if (isClicked) {
        docBody.classList.add('no-scroll')
       } else if (!isClicked) {
        docBody.classList.remove('no-scroll')
       }
    }
   
   noScoll()

    return (
        <header className="header">
            <nav className="nav">
                <h3 onMouseOver={textChange} className="page-name-title"><FaCode/> {name}</h3>
                <div onClick={addClasses} className="hamburger">
                    <span className={`nav-bar-menu ${isClicked && `active-1`}`}></span>
                    <span className={`nav-bar-menu ${isClicked && `active-2`}`}></span>
                    <span style={isClicked ? {display:"none"} : {display: 'none'}} className={`nav-bar-menu ${isClicked && `active-3`}`}></span>
                    <span className={`nav-bar-menu ${isClicked && `active-4`}`}></span>
                </div> 
                <CSSTransition in={isClicked} timeout={400} classNames="drop-down-transition" unmountOnExit>
                    <div className="drop-down">
                        <ul className="drop-down-list">
                            {liElements}
                        </ul>
                    </div>
                </CSSTransition>
            </nav>
        </header>
    )
}