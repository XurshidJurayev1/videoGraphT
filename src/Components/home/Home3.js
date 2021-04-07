import axios from 'axios'
import React, { useState } from 'react'
import style from './Home3.module.css'
import Youtube from '../Api/Api'

function Home3() {
    const [photos, setPhotos] = useState([])
    const [videos, setVideos] = useState([])

    // const searchByName= (e) => {
      
    //     const fetchData = async () => {
    //         const response = await axios.get('https://api.unsplash.com/search/photos',{
    //             params: {query: e , per_page: 30},
    //             headers: {
    //                 Authorization:'Client-ID nHTEIKcLufsM6yvvrbsrH0qOi0bd4BA3KiX341COyMg'
    //             }
    //         })
    //         setPhotos(response.data.results);
    //     }
    //     fetchData()
       
    // }

    const videoSearch = async searchName =>{
            const response= await   Youtube.get('/search', {
                params:{
                    q: searchName,
                }
                
            })
            setVideos(response.data.items)
        }

        console.log(videos);

    return (
        <div className={style.main} >
            <div className={style.inMain} >
                <div className={style.grid} >
                {
                       videos.map((video, index)=> {
                           return(
                           <div key={index} className={`card${index}`}>
                                <iframe 
                                    width='250px'
                                    height='255px'
                                    className={style.video}
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

export default Home3
