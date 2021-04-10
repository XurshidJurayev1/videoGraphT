import React from 'react'
import style from './Home6.module.css'
import img from '../../Components/assets/blog-1.jpg'
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';




const Home6 = () => {
    return (
        <div className={style.main}>
            <div className={style.inMain} >
            <Bounce bottom cascade>
                <div className={style.title} >
                    <h4>
                        OUR BLOG
                    </h4>
                    <h2>
                        BLOG UPDATE
                    </h2>
                    <span className={style.line}></span>
                </div>
            </Bounce>
                <div className={style.corusel}>
                    <div className={style.grid} >
                    <Flip left cascade>
                        <div className={style.item} >
                            <div className={style.img} style={{backgroundImage: `url(${img})`}} > </div>
                            <div className={style.content}>
                                <h3>
                                    What Makes users want to share a video  on social media
                                </h3>
                                <h4>
                                    January 03, 2021 / 5 Comment
                                </h4>
                                <p>
                                    Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.
                                </p>
                                <div className={style.more}>
                                    Read more ...
                                </div>
                            </div>
                        </div>
                    </Flip>
                    <Flip left cascade>
                        <div className={style.item} >
                            <div className={style.img} style={{backgroundImage: `url(${img})`}} > </div>
                            <div className={style.content}>
                                <h3>
                                    What Makes users want to share a video  on social media
                                </h3>
                                <h4>
                                    January 03, 2021 / 5 Comment
                                </h4>
                                <p>
                                    Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.
                                </p>
                                <div className={style.more}>
                                    Read more ...
                                </div>
                            </div>
                        </div>
                    </Flip>
                    <Flip left cascade>
                        <div className={style.item} >
                            <div className={style.img} style={{backgroundImage: `url(${img})`}} > </div>
                            <div className={style.content}>
                                <h3>
                                    What Makes users want to share a video  on social media
                                </h3>
                                <h4>
                                    January 03, 2021 / 5 Comment
                                </h4>
                                <p>
                                    Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches.
                                </p>
                                <div className={style.more}>
                                    Read more ...
                                </div>
                            </div>
                        </div>
                    </Flip>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home6
