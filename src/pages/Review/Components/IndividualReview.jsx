import React from 'react'
import RateStars from './RateStars'

const IndividualReview = ({reviewData}) => {
  console.log(reviewData.website)
  return (
    <div 
    style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem', backgroundColor: '#F7F7F7', borderRadius: "0.7rem", padding: '20px 20px 20px 30px', position:'relative'}}>
        <p className='font-medium' 
          style={{fontSize: '1.1rem', position: 'absolute', top:'20px', right: '30px'}}>
            {reviewData.createdAt}
        </p>
        <p className='font-medium' style={{fontSize: '1.1rem'}}>{reviewData.name}</p>
        <RateStars star={reviewData.star} />
        {
          (reviewData.price != "" && reviewData.price != null && reviewData.price != undefined) &&
          <p className='font-normal' style={{fontSize: '1.1rem'}}><span className='font-medium'>Giá vé:</span> {reviewData.price}</p>
        }
        {
          (reviewData.customerCare != "" && reviewData.customerCare != null && reviewData.customerCare != undefined) &&
          <p className='font-normal' style={{fontSize: '1.1rem', marginTop: '6px'}}><span className='font-medium'>Chăm sóc khách hàng: </span> {reviewData.customerCare}</p>
        }
        {
          (reviewData.website != "" && reviewData.website != null && reviewData.website != undefined) &&
          <p className='font-normal' style={{fontSize: '1.1rem', marginTop: '6px'}}><span className='font-medium'>Website:</span> {reviewData.website}</p>
        }
        <p className='font-normal' style={{fontSize: '1.1rem', marginTop: '6px'}}>{reviewData.content}</p>
    </div>
  )
}

export default IndividualReview
