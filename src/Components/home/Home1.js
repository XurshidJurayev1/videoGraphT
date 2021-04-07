import React from 'react'
import Style from './Home1.module.css'
import img from '../assets/hero-1.png'

function Home1() {
    return (
        <div>
            <div 
                className={Style.main}
                style={{backgroundImage:`url(${img})`}} >
                <div className={Style.inMain} >

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
                    
                </div>
            </div>

        </div>
    )
}

export default Home1
