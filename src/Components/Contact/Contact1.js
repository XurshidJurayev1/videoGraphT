import React, { useState } from 'react'
import style from './Contact1.module.css'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdMail, MdLocationOn} from 'react-icons/md'
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';


const Contact1 = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [site, setSite] = useState('')
    const [message, setMessage] = useState('')

    const submit = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setSite('')
        setMessage('')
    }

    return (
        <div className={style.main}>
            <div className={style.inMain} >
                <div className={style.top} >
                    <Rotate top left cascade>
                    <div className={style.inTop} >
                        <div className={style.icon}><MdLocationOn/> </div>
                        <div className={style.infoTop} >
                            <h3>
                                Address
                            </h3>
                            <p>
                                Los Angeles Gournadi, 1230 Bariasl
                            </p>
                        </div>
                    </div>
                    <div className={style.inTop} >
                        <div className={style.icon}> <FaPhoneAlt/> </div>
                        <div className={style.infoTop} >
                            <h3>
                                Phone number
                            </h3>
                            <a href="tel://+998935863877" rel="noreferrer" target="_blank">
                                +998935863877
                            </a>
                        </div>
                    </div>
                    <div className={style.inTop} >
                        <div className={style.icon}><MdMail/> </div>
                        <div className={style.infoTop} >
                            <h3>
                                Email
                            </h3>
                            <a href="mailto:xjurayev99@gmail.com" rel="noreferrer" target="_blank">
                                xjurayev99@gmail.com
                            </a>
                        </div>
                    </div>
                    </Rotate>
                </div>
                <div className={style.flex} >
                    <div className={style.map}></div>
                    <div className={style.inputDiv} >
                        <Flip left cascade>
                        <h2>
                            GET IN TOUCH
                        </h2>
                        <form 
                            onSubmit={submit}>
                            <input 
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                />
                            <input 
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} />

                            <input 
                                type="text"
                                placeholder="Website"
                                name="site"
                                value={site}
                                onChange={(e)=>setSite(e.target.value)} />
                            <textarea
                                name="message" 
                                value={message}
                                placeholder="Message" 
                                onChange={(e)=>setMessage(e.target.value)} />
                            <button type="submit">Send Message</button>
                        </form>
                        </Flip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact1
