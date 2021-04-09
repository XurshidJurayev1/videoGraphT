import React from 'react'
import { Link } from 'react-router-dom'
import style from './About1.module.css'
import img from '../assets/team-bg.png'

const About1 = ({title}) => {
    return (
        <div className={style.main} style={{backgroundImage:`url(${img})`}} >
            <div className={style.inMain} >
                <div className={style.text} >
                        <h2>{title}</h2>
                        <div className={style.link} >
                            <Link to='/'>
                                Home
                            </Link>
                            <p>
                                <span>/</span>
                                {title}
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About1
