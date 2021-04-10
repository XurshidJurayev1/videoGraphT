import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import logo from '../assets/logo.png'
import {FaFacebookF,FaTelegramPlane, FaTwitter, FaPhoneAlt, FaDribbble, FaInstagram, FaYoutube} from 'react-icons/fa'
import {FiHeart} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';



const Footer = () => {
    return (
        <div className={style.main}>
            <div className={style.inMain} >
                <div className={style.top} >
                    <Bounce bottom cascade>
                        <div className={style.linkLogo}>
                            <Link to='/'>
                                <div className={style.logo} style={{backgroundImage:`url(${logo})`}} ></div>
                            </Link>
                        </div>
                        <div className={style.icons} >
                           <div className={style.backIcon} >
                                <a rel="noreferrer" target="_blank" href='https://www.facebook.com'> <FaFacebookF/></a>
                           </div>
                           <div className={style.backIcon} >
                                <a rel="noreferrer" target="_blank" href='https://www.twitter.com'><FaTwitter/></a>
                           </div>
                           <div className={style.backIcon} >
                                <a rel="noreferrer" target="_blank" href='https://www.twitter.com'><FaDribbble/></a>
                           </div>
                           <div className={style.backIcon}>
                                <a rel="noreferrer" target="_blank" href='https://www.instagramm.com'><FaInstagram/></a>
                           </div>
                           <div className={style.backIcon} >
                                <a rel="noreferrer" target="_blank" href='https://www.youtube.com'><FaYoutube/></a>
                           </div>
                        </div>
                    </Bounce>
                </div>
                <div className={style.center} >
                <Roll left cascade>
                    <div className={style.left} >
                        <div className={style.block} >
                            <h2>
                                About us
                            </h2>
                            <p>
                                Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service production company specializing.
                            </p>
                            <button>
                                Read more ...
                            </button>
                        </div>
                        <div className={style.block} >
                            <h2>
                                Who we are
                            </h2>
                            <Link to='/'>
                                Team
                            </Link>
                            <Link to='/'>
                                Carrers
                            </Link>
                            <Link to='/'>
                                Contact us
                            </Link>
                            <Link to='/'>
                                Locations
                            </Link>
                            <button>
                                Read more ...
                            </button>
                        </div>
                        <div className={style.block} >
                            <h2>
                                Our work
                            </h2>
                            <Link to='/services'>
                                Feature
                            </Link>
                            <Link to='/'>
                                Latest
                            </Link>
                            <Link to='/'>
                                Browse Archive
                            </Link>
                            <Link to='/'>
                                Video for web
                            </Link>
                            <button>
                                Read more ...
                            </button>
                        </div>
                    </div>
                </Roll>
                <Roll right cascade>
                    <div className={style.right} >
                        <h2>
                            Newsletter
                        </h2>
                        <div className={style.inBlock} >
                            <HiOutlineMail/>
                            <a href="mailto:xjurayev99@gmail.com" rel="noreferrer" target="_blank">
                                xjurayev99@gmail.com
                            </a>
                        </div>
                        <div className={style.inBlock} >
                            <FaPhoneAlt/>
                            <a href="tel://+998935863877" rel="noreferrer" target="_blank">
                                +998935863877
                            </a>
                        </div>
                        <p>
                            Videoprah is an award-winning, full-service production  company specializing.
                        </p>
                        <div className={style.input} >
                            <input 
                                type="text" 
                                placeholder='Email' />
                            <div className={style.inputIcon} >
                                <FaTelegramPlane/>
                            </div>
                        </div>
                    </div>
                </Roll>
                </div>
                <Bounce top cascade>
                    <div className={style.end} >
                        <p>
                        Copyright © 2021 All rights reserved | This template is made with <FiHeart/>  by <Link to='https://hbbhportfolio.vercel.app'>HBBH</Link>
                        </p>
                    </div>
                </Bounce>
            </div>
        </div>
    )
}

export default Footer
