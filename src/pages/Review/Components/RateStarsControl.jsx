import React, { useState } from 'react'
import Star from './Star'

const RateStarsControl = ({width, setRate}) => {
    let ratedColor = "#C8AB5C"
    let unRatedColor = "#DBDBDB"

    console.log("div 1")

    const [starColor1, setStarColor1] = useState(ratedColor)
    const [starColor2, setStarColor2] = useState(ratedColor)
    const [starColor3, setStarColor3] = useState(ratedColor)
    const [starColor4, setStarColor4] = useState(ratedColor)
    const [starColor5, setStarColor5] = useState(ratedColor)

    const handleChangeRate1 = () => {
        console.log("click 1")
        
        setStarColor1(ratedColor)
        setStarColor2(unRatedColor)
        setStarColor3(unRatedColor)
        setStarColor4(unRatedColor)
        setStarColor5(unRatedColor)
        setRate(1)
        
    }

    const handleChangeRate2 = () => {
        setStarColor1(ratedColor)
        setStarColor2(ratedColor)
        setStarColor3(unRatedColor)
        setStarColor4(unRatedColor)
        setStarColor5(unRatedColor)
        setRate(2)
    }

    const handleChangeRate3 = () => {
        setStarColor1(ratedColor)
        setStarColor2(ratedColor)
        setStarColor3(ratedColor)
        setStarColor4(unRatedColor)
        setStarColor5(unRatedColor)
        setRate(3)
    }

    const handleChangeRate4 = () => {
        setStarColor1(ratedColor)
        setStarColor2(ratedColor)
        setStarColor3(ratedColor)
        setStarColor4(ratedColor)
        setStarColor5(unRatedColor)
        setRate(4)
    }

    const handleChangeRate5 = () => {
        setStarColor1(ratedColor)
        setStarColor2(ratedColor)
        setStarColor3(ratedColor)
        setStarColor4(ratedColor)
        setStarColor5(ratedColor)
        setRate(5)
    }

  return (
    <div style={{padding: '0', width: 'fit-content'}}>  
        <button onClick={handleChangeRate1}>
            <Star key={1} color={starColor1} width={width} />
        </button>
        <button onClick={handleChangeRate2}>
            <Star key={2} color={starColor2} width={width}/>
        </button>
        <button  onClick={handleChangeRate3}>
            <Star key={3} color={starColor3} width={width}/>
        </button>
        <button onClick={handleChangeRate4}>
            <Star key={4} color={starColor4} width={width} />
        </button>
        <button onClick={handleChangeRate5}>
            <Star key={5} color={starColor5} width={width} /> 
        </button>
    </div>
  )
}

export default RateStarsControl