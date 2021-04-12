import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaYoutube} from 'react-icons/fa'
import {HiViewList} from 'react-icons/hi'
import {VscChromeClose } from 'react-icons/vsc'
import logo from '../assets/logo.png'
import Fade from 'react-reveal/Fade';







const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [clicked, setclicked] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            if(window.scrollY > 300){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })
    const desktop = ()=>{
        return (
            <div className={scroll ? `${style.mainScroll}` : `${style.main}`} >
                <div className={style.inMain} >
                    <div className={style.mobile} >
                        <div className={style.linkLogo}>
                            <Link to='/'>
                                <div className={style.logo} style={{backgroundImage:`url(${logo})`}} ></div>
                            </Link>
                        </div>

                    </div>
                    <Link to='/' activeStyle={{color:'#00bfe7'}} >
                        Home
                    </Link>
                    <Link to='/about' activeStyle={{color:'#00bfe7'}} >
                        about
                    </Link>
                    <Link to='/services' activeStyle={{color:'#00bfe7'}} >
                        Servcices
                    </Link>
                    <Link to='/pages' activeStyle={{color:'#00bfe7'}} >
                        Pages
                    </Link>
                    <Link to='/contact' activeStyle={{color:'#00bfe7'}} >
                        Contact
                    </Link>
    
                    <div className={style.icons} >
                       <a rel="noreferrer" target="_blank"  href='https://www.facebook.com'> <FaFacebookF/></a>
                        <a rel="noreferrer" target="_blank"  href='https://www.twitter.com'><FaTwitter/></a>
                        <a rel="noreferrer" target="_blank"  href='https://www.facebook.com'><FaDribbble/></a>
                        <a rel="noreferrer" target="_blank"  href='https://www.instagramm.com'><FaInstagram/></a>
                        <a rel="noreferrer" target="_blank"  href='https://www.youtube.com'><FaYoutube/></a>
                    </div>
    
                </div>
            </div>
        )
    }

    const mobile = ()=> {
            return (
                <div className={style.MobileMain} >
                    <div className={style.inMain} >
                        <div className={style.mobile} >
                            <div className={style.linkLogo}>
                                <Link to='/'>
                                    <div className={style.logo} style={{backgroundImage:`url(${logo})`}} ></div>
                                </Link>
                            </div>
                                <div className={style.navIcon} >
                                    {
                                        clicked ? <VscChromeClose  onClick={()=>setclicked(false)} /> 
                                        : <HiViewList onClick={()=>setclicked(true)}/>
                                    }
                                </div>
                        </div>
                        <Fade top collapse  cascade when={clicked} >
                        <div className={clicked ? `${style.clickTrue}`: `${style.clickFalse}` } >
                            <Link to='/' activeStyle={{color:'red'}} >
                                Home
                            </Link>
                            <Link to='/about' activeStyle={{color:'red'}} >
                                about
                            </Link>
                            <Link to='/portfolio' activeStyle={{color:'red'}} >
                                Portfolio
                            </Link>
                            <Link to='/services' activeStyle={{color:'red'}} >
                                Servcices
                            </Link>
                            <Link to='/pages' activeStyle={{color:'red'}} >
                                Pages
                            </Link>
                            <Link to='/contact' activeStyle={{color:'red'}} >
                                Contact
                            </Link>
            
                            <div className={style.icons} >
                            <Link to='https://www.facebook.com'> <FaFacebookF/></Link>
                                <Link to='https://www.twitter.com'><FaTwitter/></Link>
                                <Link to=''><FaDribbble/></Link>
                                <Link to='https://www.instagramm.com'><FaInstagram/></Link>
                                <Link to='https://www.youtube.com'><FaYoutube/></Link>
                            </div>
                        </div>
                        </Fade>        
                    </div>
                </div>
            )
    }

    return(
        <div>
            {desktop()}
            {mobile()}
        </div>
    )
}

export default Navbar
