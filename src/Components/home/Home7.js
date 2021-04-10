import React from 'react'
import style from './Home7.module.css'
import img from '../assets/home7.jpeg'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';



const Home7 = () => {
    return (
        <div className={style.main} style={{backgroundImage:`url(${img})`}} >
            <div className={style.inMain} >
            <Zoom right cascade>
                <h2>
                Fresh Ideas, Fresh Moments Giving Wings to your Stories.
                </h2>
                <p>
                INC5000, BEST PLACES TO WORK 2019
                </p>
            </Zoom>
                <div className={style.btn} >
                START YOUR STORIES
                </div>
            </div>
        </div>
    )
}

export default Home7
