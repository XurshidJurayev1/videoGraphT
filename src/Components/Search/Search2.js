import React from 'react'
import Style from './Search2.module.css'
import './Style.css'

const  Search2 = ({photos, videos}) => {
    return (
        <div>
            <div className={Style.parent}>
                <div className={Style.main} >

                   {
                        photos.map((photo, index) => {
                            return(
                                <div 
                                    key={index}
                                    className={Style.photo} 
                                    style={{backgroundImage:`url(${photo.urls.regular})`}} >

                                </div>
                            )
                        })
                   }
                   {
                       videos.map((video, index)=> {
                           return(
                           <div key={index} className={`card${index}`}>
                                <iframe 
                                    width='250px'
                                    height='255px'
                                    className={Style.video}
                                    title={index}
                                    src={`https://www.youtube.com/embed/${video.id.videoId}` }
                                    frameBorder="0" 
                                    autoPlay border='0'
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen></iframe>
                           </div>
                           )
                       })
                   }



                </div>
            </div>
        </div>
    )
}

export default Search2
