import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard(props) {
    const navigate = useNavigate()

    const handleClick = ()=>{
        console.log("hlo bro")
        navigate('/watch/'+props.info._id)
    }
  return (
    <div className='MovieCard'>
        <div className='MovieCardImage' onClick={handleClick}>
            <img src={"http://localhost:3560/getThumbnail/" + props.info._id} alt="image not found" width={"200px"} height={"250px"}/>
        </div>

        <div className='MovieCardDetails'>
            <span>{props.info.name}</span>
        </div>

    </div>
  )
}
