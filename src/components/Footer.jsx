import React from "react";
import {FaLinkedin, FaGithubSquare, FaFile} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/dylan-luiz-58a17a216/" target="_blank"><FaLinkedin/></a>
            <Link to='resume'><FaFile /></Link>
            <a href="https://github.com/Dylanluiz" target="_blank"><FaGithubSquare/></a>
        </footer>
    )
}