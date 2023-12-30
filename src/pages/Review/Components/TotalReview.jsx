import React from 'react'
import TotalReviewLeft from './TotalReviewLeft'
import TotalReviewRight from './TotalReviewRight'

const TotalReview = ({data}) => {
  // Handle data
  let totalScore = 0
  let totalRate = 0
  let rate1 = 0
  let rate2 = 0
  let rate3 = 0
  let rate4 = 0
  let rate5 = 0
  let totalReview = data.length

  data.map(item => {
    totalScore += item.rate
    totalRate = parseInt(totalScore/totalReview)
    if(item.rate == 1){
      rate1 ++
    }
    else if(item.rate == 2){
      rate2 ++
    }
    else if(item.rate == 3){
      rate3 ++
    }
    else if(item.rate == 4){
      rate4 ++
    }
    else if(item.rate == 5){
      rate5 ++
    }
  })

  return (
    <div style={{marginLeft: 'auto', marginRight:'auto', width: '70%'}}>
        <div style={{display: 'flex', }}>
            <TotalReviewLeft totalRate={totalRate} totalReview={totalReview}/>
            <TotalReviewRight rate1={rate1} rate2={rate2} rate3={rate3} rate4={rate4} rate5={rate5} totalReview={totalReview}/>
        </div>
    </div>
    
  )
}

export default TotalReview