import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { ScrollContext } from '../App'

export default function Projects() {
    const [projData, setProjData] = useState([])
    const {scrollY} = useContext(ScrollContext)

    function scale(inc, startPos, endPos, startPosTransform) {
        const start = startPos
        const end = endPos
        const increment = inc
        const startScale = startPosTransform

        const scaledScrollY = start + (scrollY * increment)
        const adjustedScrollY = Math.max(start, Math.min(scaledScrollY, end))
        console.log(scrollY)
        if (scrollY > startScale) {
            return adjustedScrollY
        } else {
            return start
        }
    }
    
    const styles = [{
        transform: `scale(${scale(0.001, 0.98, 1, 25)})`, transition: 'all 0.4s ease'
    }, 
    {
        transform: `scale(${scale(0.001, 0.98, 1, 80)})`, transition: 'all 0.4s ease'
    }]

    useEffect(() => {
        let isConnected = true
        const projectData = async () => {
            try {
                if (isConnected) {
                    const res = await fetch('api/projects')
                    const data = await res.json()
                    setProjData(data.projects)
                }
            } catch (error) {
                console.log(error)
            }
        }
        projectData()

        return () => {
            isConnected = false
        }
    }, [])

    const projectsCards = projData.map((proj, index) => {
    const {name, site, link, technologies, git, id} = proj

    return (
       <article key={id} className="project" style={styles[index]}>
        <p className="project--num">0{`${index + 1}`}.</p>
            <img className="project--img" src={`${link}`} />
            <h2 className="project--name">{name}</h2>
            <div className="project--tech-container">
                {technologies.map(tech => <p className="project--tech">{tech}</p>)}
            </div>
            <div className="project--btn-container">
                <a href={`${site}`} target="_blank"><FaGlobe/>live</a>
                <a href={`${git}`} target="_blank"><FaGithub /> gitHub</a>
                <Link to={`/projects/${id}`}>Read more</Link>
            </div>
       </article> 
    )
})

    return (
        <section className="projects-section-container">
            {projectsCards}
        </section>
    )

}