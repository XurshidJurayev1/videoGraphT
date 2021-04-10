import React from 'react'
import style from './About2.module.css'
import img1 from '../assets/about-1.jpg'
import img2 from '../assets/about-2.jpg'
import img3 from '../assets/about-3.jpg'
import svg1 from '../assets/si-1.webp'
import svg4 from '../assets/si-4.webp'

const About2 = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
                <div className={style.container} >
                    <div className={style.images} >
                        <div className={style.left} style={{backgroundImage:`url(${img1})`}} ></div>
                        <div className={style.right} >
                            <div className={style.top} style={{backgroundImage:`url(${img2})`}} ></div>
                            <div className={style.end} style={{backgroundImage:`url(${img3})`}} ></div>
                        </div>
                    </div>
                    <div className={style.text} >
                            <h4>
                                ABOUT VIDEOGRAPH
                            </h4>
                            <h2>
                                WHO WE ARE?
                            </h2>
                            <div className={style.line}></div>
                            <div className={style.cards}>
                                <div className={style.card} >
                                    <div className={style.icon} >
                                        <div  style={{backgroundImage:`url(${svg1})`}}></div>
                                    </div>
                                    <h4>
                                        Video distribution
                                    </h4>
                                    <p>
                                        Whether you’re halfway through the editing process, or you .
                                    </p>
                                </div>
                                <div className={style.card} >
                                    <div className={style.icon} >
                                        <div  style={{backgroundImage:`url(${svg4})`}}></div>
                                    </div>
                                    <h4>
                                        Video hosting
                                    </h4>
                                    <p>
                                        Whether you’re halfway through the editing process, or you .
                                    </p>
                                </div>
                            </div>
                            <p>
                                Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service production company specializing in commercial, broadcast, tourism & action sport video production services has been featured.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2
