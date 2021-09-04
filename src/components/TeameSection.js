import React from 'react'
import { teams } from '../data'

const TeameSection = () => {
    return (
        <div id='container'>
            <section class="carousel-section" id="team">
                <h2 class="title">my teams</h2>
                    <div class="carousel">
                        {teams.map((team) => {
                            const { id, image, name, text } = team;
                            return (
                                <div className='carousel-item'>
                                    <div className='carousel-image' key={id}>
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
