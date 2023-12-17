import React from 'react'
import TotalReviewLeft from './TotalReviewLeft'
import TotalReviewRight from './TotalReviewRight'

const TotalReview = () => {
  return (
    <div style={{marginLeft: 'auto', marginRight:'auto', width: '70%'}}>
        <div style={{display: 'flex', }}>
            <TotalReviewLeft />
            <TotalReviewRight />
        </div>
    </div>
    
  )
}

export default TotalReview