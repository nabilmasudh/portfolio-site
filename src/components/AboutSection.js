import React from 'react'
import { abouts } from '../data'

const AboutSection = () => {
    return (
        <div id='container'>
            <section className="about-section" id="about">
                <h2 className="title">about me</h2>
                {abouts.map((about)=>{
                    const {id, image, info, text} = about;
                    return(
                        <div className='about'>
                            <div className='about-item'>
                                <div className='about-img' key={id}>
                                    <img src={image} alt=''/>
                                </div>
                            </div>
                            <div className="about-item">
                                <h2>{info}</h2>
                                <p>{text}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default AboutSection
