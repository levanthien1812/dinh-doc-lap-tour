import React from 'react'
import ProcessBar from './ProcessBar'

const TotalReviewRight = ({rate1, rate2, rate3, rate4, rate5, totalReview}) => {
    let total = 100
    // 1 - 2 - 3 - 4 - 5
    let rateData = [parseInt(rate1), rate2, rate3, rate4, rate5]

    console.log("rateData", rateData)
  return (
    <div style={{flexGrow: '3'}}>
         {rateData.map((num, i) => (
            <ProcessBar currentNum={num} totalNum={totalReview} index={5 - i}/>
        ))}
    </div>
  )
}

export default TotalReviewRight