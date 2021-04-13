import React from 'react'
import style from './Service1.module.css'
import img from '../assets/calltos-bg.jpg'

const Service1 = () => {
    return (
        <div className={style.main}>
            <div className={style.inMain} >
                <div className={style.img} style={{backgroundImage:`url(${img})`}} >
                    <div className={style.text} >  
                        <h2>
                            CREATE AWESOME VIDEOS WITH WIDEO’S POWERFUL FEATURES
                        </h2>
                        <p>
                            WIDEO COMBINES ALL THE FEATURES YOU NEED TO EASILY CREATE PROFESSIONAL VIDEOS AND PRESENTATIONS
                        </p>
                        <button>
                            START YOUR STORIES
                        </button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Service1
