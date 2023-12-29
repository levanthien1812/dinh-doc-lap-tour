import React from 'react'
import RateStars from './RateStars'

const TotalReviewLeft = ({totalRate, totalReview}) => {
  return (
    <div style={{flexGrow: '1'}}>
        <p className='text-center'
        style={{fontSize:'78px', fontWeight: '700', marginBottom: '20px'}}>
            {totalRate}
        </p>
        <div style={{marginLeft: 'auto', marginRight: 'auto',  width: 'fit-content'}}>
            <RateStars star={totalRate} width={'44px'} />
        </div>
        <p className='text-center'>
            {totalReview}
        </p>
    </div>
  )
}

export default TotalReviewLeft