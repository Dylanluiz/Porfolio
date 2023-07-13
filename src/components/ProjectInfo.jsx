import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingScreen from './LoadingScreen'
import { FaArrowLeft } from 'react-icons/fa'


export default function ProjectInfo() {
    
    const {id} = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        let isConnected = true
        const projData = async () => {
           try {
            if (isConnected) {
                const res = await fetch(`/api/projects/${id}`)
                const data = await res.json()
                setProject(data.projects)
            }
           } catch (error) {
                console.log(error)
           }
        } 
        projData()

        return () => {
            isConnected = false
        }
    }, [])



    return (
        <>
          {project ? 
            <main className='read-more-container'>
                <Link to='/'><FaArrowLeft/> Go back</Link>
                <h1 className='read-more--name'>{project.name}</h1>
                <img className="read-more--img" src={`${project.link}`}></img>
                <div className='read-more--tech-container'>
                    {project.technologies.map(item => 
                        <p className='read-more--tech' key={item}>{item}</p>)}
                </div>
                <p className='read-more--desc'>{project.desc}</p>
                <div className='read-more--btn'>
                    <a href={`${project.site}`}>Live site</a>
                    <a href={`${project.git}`}>Git Repo</a>
                </div> 
            </main>
          
          
          : <div className='loading-screen'>
            <LoadingScreen
                text='Loading..'
                delay={10}
            />
            </div>}
        </>
    )
}