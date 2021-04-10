import React from 'react'
import style from './About3.module.css'
import bg from '../assets/testimonial-bg.jpg'
import user1 from ''

const About3 = () => {
    return (
        <div className={style.main} style={{backgroundImage:`url(${bg})`}} >
            <div className={style.inMain} >
                <div className={style.title} >
                    <h4>
                        ABOUT VIDEOGRAPH
                    </h4>
                    <h2>
                        WHO WE ARE?
                    </h2>
                    <div className={style.line}></div>
                </div>
                <div className={style.corousel} >
                    <div className={style.block} >
                        <div className={style.border} >

                        </div>
                        <div className={style.user} >
                            <div className={style.userImg} style={{backgroundImage:`url(${user1})`}} ></div>
                            <div>
                                <h3>
                                    Krista Attorn
                                </h3>
                                <p>
                                    Web Designer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About3
