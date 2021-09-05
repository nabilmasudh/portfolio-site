import React from 'react'
import { services } from '../data'

const ServiceSection = () => {
    return (
        <div id='container'>
            <section className="services-section" id="services">
                <h2 className="title">my services</h2>
                <div className="services">
                    {services.map((service, index)=>{
                        const {icon, title, text} = service;
                        return(
                            <div className='services-item' key={index}>
                                <h2 className='icon'>{icon}</h2>
                                <h2>{title}</h2>
                                <p>{text}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default ServiceSection
