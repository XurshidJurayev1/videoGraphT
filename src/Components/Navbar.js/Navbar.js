import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaDribbble, FaInstagram, FaYoutube} from 'react-icons/fa'
import {HiViewList} from 'react-icons/hi'
import {VscChromeClose } from 'react-icons/vsc'
import logo from '../assets/logo.png'






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
                       <Link to='/'> <FaFacebookF/></Link>
                        <Link to='/'><FaTwitter/></Link>
                        <Link to='/'><FaDribbble/></Link>
                        <Link to='/'><FaInstagram/></Link>
                        <Link to='/'><FaYoutube/></Link>
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
                        <div className={clicked ? `${style.clickTrue}`: `${style.clickFalse}`} >
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
                            <Link to='/'> <FaFacebookF/></Link>
                                <Link to='/'><FaTwitter/></Link>
                                <Link to='/'><FaDribbble/></Link>
                                <Link to='/'><FaInstagram/></Link>
                                <Link to='/'><FaYoutube/></Link>
                            </div>
                        </div>
        
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