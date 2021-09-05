import React from 'react'
import { teams } from '../data'

const TeameSection = () => {
    return (
        <div id='container'>
            <section className="carousel-section" id="team">
                <h2 className="title">my teams</h2>
                    <div className="carousel">
                        {teams.map((team, index) => {
                            const {image, name, text } = team;
                            return (
                                <div className='carousel-item' key={index}>
                                    <div className='carousel-image'>
                                        <img  src={image} alt=''/>
                                    </div>
                                    <h2>{name}</h2>
                                    <p>{text}</p>
                                </div>
                            )
                        })}
                    </div>
            </section>
        </div>
    )
}

export default TeameSection
