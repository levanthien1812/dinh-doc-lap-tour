import React from 'react'
import Star from './Star'

const RateStars = ({star, width, allowChange}) => {
    let unrated = 5 - star;
    let ratedColor = "#FFC90E"
    let unRatedColor = "#DBDBDB"

    // const [starNum, setStarNum ] = useState([]);
    // useEffect(() => {
      
    // }, [star]);
    
    const changeStarNum = () => {

    }

  return (
    <div  style={{padding: '0', width: 'fit-content'}}>
        {/* {Array.from({ length: star }).map((_, index) => (
            <Star key={index} color="#FFC90E" width={width}/>
        ))}
        {Array.from({ length: unrated }).map((_, index) => (
            <Star key={index} color="#DBDBDB"  width={width}/>
        ))}      */}

        <Star key={1} color="#FFC90E" width={width} onClick="changeStarNum"/>
        <Star key={2} color="#FFC90E" width={width}/>
        <Star key={3} color="#FFC90E" width={width}/>
        <Star key={4} color="#FFC90E" width={width}/>
        <Star key={5} color="#FFC90E" width={width}/> 
    </div>
  )
}

export default RateStars