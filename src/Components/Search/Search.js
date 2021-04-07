import React, {useState} from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import Search2 from './Search2'
import Youtube from '../../API/Api'

function Search() {
    const [photos, setPhotos] = useState([])
    const [videos, setVideos] = useState([])

    const searchByName= (e) => {
      
        const fetchData = async () => {
            const response = await axios.get('https://api.unsplash.com/search/photos',{
                params: {query: e , per_page: 30},
                headers: {
                    Authorization:'Client-ID nHTEIKcLufsM6yvvrbsrH0qOi0bd4BA3KiX341COyMg'
                }
            })
            setPhotos(response.data.results);
        }
        fetchData()
       
    }

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
        <div>
            <SearchBar searchByName={searchByName} videoSearch={videoSearch}/>
            <Search2 photos={photos} videos={videos} />
        </div>
    )
}

export default Search
