import React from 'react'
import RateStars from './RateStars'

const ReviewForm= () => {
  let review = "Chưa hợp lý"
  let starNum = 2
  return (
    <div>
       Để lại đánh giá
       
      <div style={{display: 'flex', width: '70%', marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{flexGrow: '1'}}>
            <p style={{textAlign: 'end', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>Giá vé</p>
        </div>
        <div style={{flexGrow: '2'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
            <RateStars star={starNum} width={'50px'} />
          </div>          
        </div>
        <div style={{flexGrow: '1'}}>
          <p style={{textAlign: 'start', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>{review}</p>
        </div>
      </div>

    
    </div>
  )
}

export default ReviewForm