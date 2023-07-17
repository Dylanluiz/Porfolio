import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'


export default function Contact() {

    const form = useRef()
 
    function sendEmail(event) {
        event.preventDefault()

        emailjs.sendForm('service_3k0ttug', 'template_3q3g27z', 
            form.current, 'c3ZhTzr5MH6S27lsZ')
                .then(
                (result) => {
                    console.log(result.text)
                    form.current.reset()
                }, 
                (error) => {
                    console.log(error)
                })
    }

    return (
        <form ref={form} onSubmit={sendEmail} className='email-form'>
            <div className='input-container'>
            <input
                className='name-input' 
                type='text'
                placeholder='Name'
                name="user_name"
                required
            />
            <input
                className='email-input'
                type="email"
                placeholder='Email'
                name='user_email'
                required
            />

            <textarea
                className='message-input'
                placeholder='Message'
                name="user_message"
                required
            />
            </div>
            
            <button 
                className='submit-btn'
                type="submit">Send</button>
        </form>
    )
}