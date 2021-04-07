import React, {useState} from 'react'
import Style from './SearchBar.module.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {HiQrcode} from 'react-icons/hi'

const SearchBar = ({searchByName, videoSearch}) => {
    const [input, setInput] = useState('')

    const form = (e) => {
        e.preventDefault()
        searchByName(input)
        videoSearch(input)
        setInput('')
    }

    return (
        <div>
            <div className={ `ui segment ${Style.parent}`} > 
                <div className={Style.main} >
                    <div className={Style.input}>
                        <div className={Style.icon}>
                            <BiSearchAlt2/>
                        </div>
                        <form 
                            className='ui form' 
                            onSubmit={form}>
                            <input
                                className='ui input'
                                placeholder="Search" 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}/>
                        </form>
               </div>
                    <div className={Style.icon} >
                            <HiQrcode/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchBar
