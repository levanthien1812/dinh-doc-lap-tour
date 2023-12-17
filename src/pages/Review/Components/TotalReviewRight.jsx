import React from 'react'
import ProcessBar from './ProcessBar'

const TotalReviewRight = () => {
    let total = 100
    // 1 - 2 - 3 - 4 - 5
    let data = [10, 40, 0, 10, 30]
  return (
    <div style={{flexGrow: '3'}}>
         {data.map((num, i) => (
            <ProcessBar currentNum={num} totalNum={total} index={5 - i}/>
        ))}
    </div>
  )
}

export default TotalReviewRight