import React from "react";
import {Link} from 'react-router-dom'
import {FaReact, FaCss3Alt, FaJsSquare, FaHtml5} from 'react-icons/fa'
import Marquee from "react-fast-marquee"

export default function Resume() {
    return (
        <section className="resume-main-wrapper">
            <Link to='..'>Go back</Link>
            <h1>Resume</h1>
            <div className='resume-info-container'>
                <h2 className="resume-info--title">
                    <span>Dylan Luiz</span> | Frontend developer
                </h2>
                <p className="resume-info--email">
                    <span>
                        Email: 
                    </span>
                    dylan.luiz0@gmail.com
                </p>
            </div>

            <div className="profile-container">
                <h3 className="profile-title">Professional Profile</h3>
                <p>Self-motivated front-end developer, passionate about development.</p>
                <p>What I bring:</p>
                <p>In my previous roles, I have managed to foster an environment of energy and excitement through my genuine passion.</p>
                <p>One of my greatest sources of excitement is my eagerness to learn, grow and improve my skills, through learning new languages, frameworks, or methodologies. My excitement for this industry surpasses my work life and into my personal life. Through my interest in not only the technical aspect of development but the theoretical aspect as well as the development of technology over time and how it can be pushed to the edge - there is not a LinusTechTips video I haven't watched</p>
                <p>I am dedicated to personal growth, consistently striving to improve myself. As a self-starter I have educated myself in JavaScript, React js, CSS, HTML, APIs, REST API, JSON, and Firebase. While I have developed a strong foundation in these areas, I am determined to continue my education and transition to a full-stack environment. I live by the mantra that - “the man who sees himself as perfect is the man that sees himself fail” - and I embrace this wholeheartedly</p>
                <p>Perhaps most importantly, perseverance, throughout my life, in every challenge that I have faced, I have persevered, pushing myself to learn, grow and do anything to overcome the obstacles that I am facing, this mindset has afforded me strong problem-solving and critical thinking skills, enabling me to approach complex situations with confidence and creativity.</p>
                <p>Overall, I am genuinely excited to bring my energy, passion, and growth-orientated mindset to any team or environment. I am committed to continuously pushing boundaries, in both a personal and professional domain, I firmly believe that my unwavering perseverance and relentless pursuit of knowledge will positively impact any team.</p>
            </div>
            <div className='core-skills'>
            <h3>Core skills</h3>  
            <Marquee className="marquee-wrapper">
                <div className="marquee-container">
                    <p className="react"><FaReact/>React -</p>
                </div>
                <div className="marquee-container">
                    
                    <p className="css"><FaCss3Alt/>CSS -</p>
                </div>  
                <div className="marquee-container">
                    
                    <p className='js'><FaJsSquare/>JavaScript -</p>
                </div>
                <div className="marquee-container">
                    
                    <p className="html"><FaHtml5/>HTML -</p>
                </div>  
            </Marquee>
            <p className="additional-skills-title">Additional skills</p>
            <ul className="additional-skills">
                <li>Firebase</li>
                <li>GitHub</li>
                <li>API/Restful API</li>
                <li>JSON</li>
            </ul>
            </div>
            <div className="career-summary">
                <h3 className="career-title">Career Summary</h3>

            </div>
            
        </section>

       
    )
}