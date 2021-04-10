import React from 'react'
import Style from './Home1.module.css'
import img from '../assets/hero-1.png'
import Fade from 'react-reveal/Fade';


function Home1() {
    return (
        <div>
            <div 
                className={Style.main}
                style={{backgroundImage:`url(${img})`}} >
                <div className={Style.inMain} >
                <Fade bottom cascade >
                    <div className={Style.text} >
                        <div className={Style.inText} >
                            <p>
                                FOR WEBSITE AND VIDEO EDITING
                            </p>
                            <h2>
                                VIDEOGRAPHER’S PORTFOLIO
                            </h2>
                           <div className={Style.btn} >
                               <div className={Style.btnin}>
                               </div>
                                <a href="/">
                                    SEE MORE ABOUT US
                                </a>
                                <div className={Style.btn2} >

                                </div>
                           </div>
                        </div>
                    </div>
                </Fade>
                </div>
            </div>

        </div>
    )
}

export default Home1
