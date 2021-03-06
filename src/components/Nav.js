import React, { useState, useEffect, useRef } from 'react'
import { FaBars} from "react-icons/fa";
import { links, social } from '../data';

const NavSection = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`
        }else{
            linksContainerRef.current.style.height = `0px`
        }
    })
    return (
        <nav>
            <div id='container' className='nav-center'>
                <div className='nav-header'>
                    <h2>Porfolio.</h2>
                    <button className='nav-toggole'
                    onClick={()=> setShowLinks(!showLinks)}
                    >
                        <FaBars/>
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul ref={linksRef}>
                        {links.map((link, index)=>{
                            const {url, text} = link;
                            return (
                                <li key={index}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='social-icons'>
                    <ul>
                        {social.map((socialIcon, index)=>{
                            const {url, icon} = socialIcon;
                            return(
                                <li key={index}>
                                    <a href={url}>{icon}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavSection
