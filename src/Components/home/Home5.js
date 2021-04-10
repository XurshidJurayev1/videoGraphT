import React from 'react'
import Style from './Home5.module.css'
import img1 from '../assets/team-1.png'
import img2 from '../assets/team-2.png'
import img3 from '../assets/team-3.png'
import img4 from '../assets/team-4.png'
import bck from '../assets/team-bg.png'
import {FaFacebookF, FaTwitter, FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';




function Home5() {
    return (
        <div>
            <div className={Style.main} style={{backgroundImage:`url(${bck})`}} >
                <div className={Style.inMain} >
                    <Rotate top right cascade>
                        <div className={Style.title} >
                                <h4>
                                    NICE TO MEET
                                </h4>
                                <h2>
                                    OUR TEAM
                                </h2>
                                <div className={Style.line}></div>
                        </div>
                    </Rotate>
                    <Bounce bottom cascade>
                        <div className={Style.btnPosition}>
                                <div className={Style.btn} >
                                <div className={Style.btnin}>
                                </div>
                                    <a href="/">
                                        VIEW ALL SERVICES
                                    </a>
                                    <div className={Style.btn2} >

                                    </div>
                            </div>
                        </div>
                    </Bounce>
                    <Zoom bottom cascade>
                    <div className={Style.pictures} >
                        <div className={Style.img} style={{backgroundImage:`url(${img1})`}}>
                               <div className={Style.hover} >
                                    <h2>
                                        AMANDA STONE
                                    </h2>
                                    <p>
                                        Videographer
                                    </p>
                                    <div className={Style.icon} >
                                        <FaFacebookF/>
                                        <FaTwitter/>
                                        <FaTelegramPlane/>
                                        <FaInstagram/>
                                    </div>
                               </div>
                        </div>
                        <div className={Style.img} style={{backgroundImage:`url(${img2})`}}>
                               
                                <div className={Style.hover} v>
                                    <h2>
                                        AMANDA STONE
                                    </h2>
                                    <p>
                                        Videographer
                                    </p>
                                    <div className={Style.icon} >
                                        <FaFacebookF/>
                                        <FaTwitter/>
                                        <FaTelegramPlane/>
                                        <FaInstagram/>
                                    </div>
                                </div>
                               
                        </div>
                        <div className={Style.img} style={{backgroundImage:`url(${img3})`}}>
                               <div className={Style.hover} >
                                    <h2>
                                        AMANDA STONE
                                    </h2>
                                    <p>
                                        Videographer
                                    </p>
                                    <div className={Style.icon} >
                                        <FaFacebookF/>
                                        <FaTwitter/>
                                        <FaTelegramPlane/>
                                        <FaInstagram/>
                                    </div>
                               </div>
                        </div>
                        <div className={Style.img} style={{backgroundImage:`url(${img4})`}}>
                           <div className={Style.hover} >
                                <h2>
                                        AMANDA STONE
                                    </h2>
                                    <p>
                                        Videographer
                                    </p>
                                    <div className={Style.icon} >
                                        <FaFacebookF/>
                                        <FaTwitter/>
                                        <FaTelegramPlane/>
                                        <FaInstagram/>
                                    </div>
                            </div>                            
                        </div>
                        </div>
                    </Zoom>
                    </div>

             </div>
             
         </div>
     )
}

export default Home5
