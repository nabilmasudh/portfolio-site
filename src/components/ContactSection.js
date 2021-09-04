import React, { useState } from 'react'
import { contact } from '../data'

const ContactSection = () => {
    const [person, setPerson] = useState({ firstName: '', lastName:'', email:''})

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    
    return (
        <div id="container">
            <section className="contact-section" id="contact">
                <h2 className="title">contact me</h2>
                <div class="contact">
                    
                    <div className="contact-item">
                        <h2>My address</h2>
                        {contact.map((contact)=>{
                            const {id, title, value} = contact;
                            return(
                                <div className="name items" key={id}>
                                    <h3>{title}</h3>
                                    <span>{value}</span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="contact-item">
                        <form >
                            <label htmlFor='firstName'>first Name : </label>
                            <input
                                type='text'
                                placeholder='enter your first name'
                                id='firstName'
                                name='firstName'
                                value={person.firstName}
                                onChange={handleChange}
                            />
                            <label htmlFor='firstName'>last Name : </label>
                            <input
                                type='text'
                                placeholder='enter your last name'
                                id='lastName'
                                name='lastName'
                                value={person.lastName}
                                onChange={handleChange}
                            />
                            <label htmlFor='email'>E-mail : </label>
                            <input
                                type='text'
                                placeholder='enter your email'
                                id='email'
                                name='email'
                                value={person.email}
                                onChange={handleChange}
                            />
                        </form>
                            <button type="submit" onClick={handleSubmit}>submit</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactSection
