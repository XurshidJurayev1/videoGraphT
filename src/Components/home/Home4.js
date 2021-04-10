import React from 'react'
import Style from './Home4.module.css'
import icon1 from '../assets/ci-1.webp'
import icon2 from '../assets/ci-2.webp'
import icon3 from '../assets/ci-3.webp'
import icon4 from '../assets/ci-4.webp'
import CountUp from 'react-countup'
import Fade from 'react-reveal/Fade';



function Home4() {
    return (
        <div>
            <div className={Style.main} >
                <div className={Style.inMain} >
                    <div className={Style.flex} >
                            
                        <Fade left >
                            <div className={Style.card} >
                                <div  
                                    className={Style.icon}
                                    style={{backgroundImage:`url(${icon1})`}} ></div>
                                <h2>
                                    <CountUp end={1068} duration={15} />
                                
                                </h2>
                                <h4>
                                    Happy clients
                                </h4>
                            </div>
                        </Fade>
                        <Fade top >
                            <div className={Style.card} >
                                <div  
                                        className={Style.icon}
                                        style={{backgroundImage:`url(${icon2})`}} ></div>
                                <h2>
                                    <CountUp end={130} duration={8}/>
                                </h2>
                                <h4>
                                    Projects in Procces
                                </h4>
                            </div>
                        </Fade> 

                        <Fade bottom >
                            <div className={Style.card} >
                                <div  
                                    className={Style.icon}
                                    style={{backgroundImage:`url(${icon3})`}} ></div>
                                <h2>
                                    <CountUp end={430} duration={13}/>
                                </h2>
                                <h4>
                                   Compled Projects 
                                </h4>
                            </div>
                        </Fade>
                        <Fade right >
                            <div className={Style.card} >
                                <div  
                                    className={Style.icon}
                                    style={{backgroundImage:`url(${icon4})`}} ></div>
                                <h2>
                                    <CountUp end={400} duration={11}/>
                                </h2>
                                <h4>
                                    Perspective clients
                                </h4>
                            </div>
                        </Fade>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4
