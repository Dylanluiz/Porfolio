import React from "react";
import {Link} from 'react-router-dom'
import {FaReact, FaCss3Alt, FaJsSquare, FaHtml5, FaArrowLeft} from 'react-icons/fa'
import Marquee from "react-fast-marquee"
import Footer from './Footer'


export default function Resume() {
    return (
        <>
        <section className="resume-main-wrapper">
            <div className="link-container">
            <Link to='..'><FaArrowLeft/>Go back</Link>
            <a href='./public/files/cv.pdf'
               download="Dylan Luiz Frontend Dev CV"
               rel='noreferrer' >Download CV</a>
            </div>

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
                <div className="scrimba">
                    <div className="scrimba-inner-container">
                        <p className="details-employer">2022-2023<span>Scrimba</span></p>
                        <p className="responsibilities">Personal development</p>
                    </div>
                    <ul className="bullet-points">
                        <li>Developed numerous personal projects using React.js, HTML, CSS, and JS, demonstrating proficiency in front-end development.</li>
                        <li>Created responsive web designs and implemented interactive features to enhance UX</li>
                        <li>Integrated APIs and worked with JSON data to fetch and display dynamic content</li>
                    </ul>
                </div>

                <div className="scrimba">
                    <div className="scrimba-inner-container">
                        <p className="details-employer">2021 - 2022<span>Quay 1 international</span></p>
                        <p className="responsibilities">Key Responsibilities</p>
                    </div>
                    <ul className="bullet-points">
                        <li>Process improvement and business development</li>
                        <li>Negotiation between relevant parties</li>
                        <li>Creating client email communication, for each client's chosen investment</li>
                        <li>Recording, maintaining, and developing client information</li>
                        <li>Communicating with multiple parties to finalize the life cycle of the project at hand</li>
                    </ul>
                </div>

                <div className="scrimba">
                    <div className="scrimba-inner-container">
                        <p className="details-employer">2021 - 2021<span>RE/MAX Property Associates</span></p>
                        <p className="responsibilities">Key Responsibilities</p>
                    </div>
                    <ul className="bullet-points">
                        <li>Same as above</li>
                    </ul>
                    <p className="responsibilities">Achivements</p>
                    <ul className="bullet-points">
                        <li><span>Highest sales volume</span> - achieved the highest sales volume within the first 2 months of working in the company within my team</li>
                        <li><span>Highest listing volume</span> achieved the most listings within the first 2 months of working within the company within my team</li>
                    </ul>
                </div>
            </div>
            <div className="education">
                <h3 className="education-title">Education</h3>
                <div>
                    <h4>Scrimba</h4>
                    <p>Frontend Career Path</p>
                    <ul>
                        <li>Completed comprehensive training in front-end developmen</li>
                    </ul>
                </div>

                <div>
                    <h4>Coursera</h4>
                    <p>Google Project Manager</p>
                    <ul>
                        <li>Professional certificate - Project Management<small>With a focus on agile Project management methodology</small></li>
                    </ul>
                </div>

                <div>
                    <h4>ETA College</h4>
                    <p>Higher Certificate in Fitness</p>
                    <ul>
                        <li>Obtained higher certificate in Fitness</li>
                    </ul>
                </div>

                <div>
                    <h4>Matric </h4>
                    <ul>
                        <li>Obtained Matric certificates</li>
                    </ul>
                </div>
            </div>
           
        </section>
        <Footer/> 
       </>
    )
}