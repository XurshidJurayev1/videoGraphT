import React from 'react'
import Style from './Home2.module.css'
import svg1 from '../assets/si-1.webp'
import svg2 from '../assets/si-2.webp'
import svg3 from '../assets/si-3.webp'
import svg4 from '../assets/si-4.webp'

function Home2() {
    return (
        <div>
            <div className={Style.main} >
                <div className={Style.inMain} >

                    <div className={Style.flex}>
                        <div className={Style.left} >
                            <h4>
                                OUR SERVICES
                            </h4>
                            <h2>
                                WHAT WE DO?
                            </h2>
                            <div className={Style.line}></div>
                            <p>
                                If you hire a videographer of our team you will get a video professional to make a custom video for your business and, once the project is over.
                            </p>
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
                        <div className={Style.right} >
                            <div className={Style.one}>
                                <div className={Style.card} >
                                    <div className={Style.icon} >
                                        <div  style={{backgroundImage:`url(${svg1})`}}></div>
                                    </div>
                                    <h4>
                                        Video distribution
                                    </h4>
                                    <p>
                                        Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.
                                    </p>
                                </div>
                                <div className={Style.card} >
                                    <div className={Style.icon} >
                                        <div  style={{backgroundImage:`url(${svg2})`}}></div>
                                    </div>
                                    <h4>
                                        Scriptwriting and editing
                                    </h4>
                                    <p>
                                        Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.
                                    </p>
                                </div>
                            </div>
                            <div className={Style.two}>
                                <div className={Style.card} >
                                    <div className={Style.icon} >
                                        <div  style={{backgroundImage:`url(${svg3})`}}></div>
                                    </div>
                                    <h4>
                                        Video distribution
                                    </h4>
                                    <p>
                                        Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.
                                    </p>
                                </div>
                                <div className={Style.card} >
                                    <div className={Style.icon} >
                                        <div  style={{backgroundImage:`url(${svg4})`}}></div>
                                    </div>
                                    <h4>
                                        Video hosting
                                    </h4>
                                    <p>
                                        Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Home2
