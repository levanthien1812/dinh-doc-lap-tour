import React from 'react'
import Star from './Star'

const RateStars = ({width, star}) => {
    let unrated = 5 - star;

  return (
    <div  style={{padding: '0', width: 'fit-content'}}>
        {Array.from({ length: star }).map((_, index) => (
            <Star key={index} color="#C8AB5C" width={width}/>
        ))}
        {Array.from({ length: unrated }).map((_, index) => (
            <Star key={index} color="#DBDBDB"  width={width}/>
        ))}     
    </div>
  )
}

export default RateStars