import React from 'react'
import Style from './Home4.module.css'
import icon1 from '../assets/ci-1.webp'
import icon2 from '../assets/ci-2.webp'
import icon3 from '../assets/ci-3.webp'
import icon4 from '../assets/ci-4.webp'


function Home4() {
    return (
        <div>
            <div className={Style.main} >
                <div className={Style.inMain} >
                    <div className={Style.flex} >
                            
                            <div className={Style.card} >
                                <div  
                                    className={Style.icon}
                                    style={{backgroundImage:`url(${icon1})`}} ></div>
                                <h2>
                                    1068
                                </h2>
                                <h4>
                                    Happy clients
                                </h4>
                            </div>
                            <div className={Style.card} >
                                <div  
                                        className={Style.icon}
                                        style={{backgroundImage:`url(${icon2})`}} ></div>
                                <h2>
                                    230
                                </h2>
                                <h4>
                                    Compled Projects
                                </h4>
                            </div>

                            
                            <div className={Style.card} >
                                <div  
                                    className={Style.icon}
                                    style={{backgroundImage:`url(${icon3})`}} ></div>
                                <h2>
                                    230
                                </h2>
                                <h4>
                                   Compled Projects 
                                </h4>
                            </div>
                            <div className={Style.card} >
                                <div  
                                    className={Style.icon}
                                    style={{backgroundImage:`url(${icon4})`}} ></div>
                                <h2>
                                    230
                                </h2>
                                <h4>
                                    Perspective clients
                                </h4>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4
