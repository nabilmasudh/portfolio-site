import React from 'react'
import { skills } from '../data'

const SkillsSection = () => {
    return (
        <div id='container'>
            <section className="skills-section" id="skills">
                <h2 className="title">my skills</h2>
                <div className="skills">
                    {skills.map((skill, index) => {
                        const {title, text } = skill;
                        return (
                            <div className='skills-item' key={index}>
                                  <h2>{title}</h2>
                                  <p>{text}</p>
                            </div>  
                            )
                    })}
                    
                    <div className="skills-item">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>90%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>SASS</span>
                                <span>90%</span>
                            </div>
                            <div className="line sass"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JAVASCRIPT</span>
                                <span>70%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>React</span>
                                <span>90%</span>
                            </div>
                            <div className="line react"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillsSection
