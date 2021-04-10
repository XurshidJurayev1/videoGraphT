import React from 'react'
import style from './About3.module.css'
import bg from '../assets/testimonial-bg.jpg'
import user1 from '../assets/team-2.png'
import Roll from 'react-reveal/Roll';
import Tada from 'react-reveal/Tada';


const About3 = () => {
    return (
        <div className={style.main} style={{backgroundImage:`url(${bg})`}} >
            <div className={style.inMain} >
                <Roll bottom cascade>
                    <div className={style.title} >
                        <h4>
                            ABOUT VIDEOGRAPH
                        </h4>
                        <h2>
                            WHO WE ARE?
                        </h2>
                        <div className={style.line}></div>
                    </div>
                </Roll>
                <div className={style.corousel} >
                    <Tada>
                        <div className={style.block} >
                            <div className={style.border} >
                                <p>
                                    Delivers such great services that it can benefit all kinnd of people from an ynumber of industries  
                                </p>
                            </div>
                            <div className={style.user} >
                                <div className={style.userImg} style={{backgroundImage:`url(${user1})`}} ></div>
                                <div>
                                    <h3>
                                        Krista Attorn
                                    </h3>
                                    <p>
                                        Video Grapher
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Tada>
                    <Tada>
                        <div className={style.block} >
                            <div className={style.border} >
                                <p>
                                    Delivers such great services that it can benefit all kinnd of people from an ynumber of industries  
                                </p>
                            </div>
                            <div className={style.user} >
                                <div className={style.userImg} style={{backgroundImage:`url(${user1})`}} ></div>
                                <div>
                                    <h3>
                                        Krista Attorn
                                    </h3>
                                    <p>
                                        Video Grapher
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Tada>
                    <Tada>
                        <div className={style.block} >
                            <div className={style.border} >
                                <p>
                                    Delivers such great services that it can benefit all kinnd of people from an ynumber of industries  
                                </p>
                            </div>
                            <div className={style.user} >
                                <div className={style.userImg} style={{backgroundImage:`url(${user1})`}} ></div>
                                <div>
                                    <h3>
                                        Krista Attorn
                                    </h3>
                                    <p>
                                        Video Grapher
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Tada>
                </div>
            </div>
        </div>
    )
}

export default About3
