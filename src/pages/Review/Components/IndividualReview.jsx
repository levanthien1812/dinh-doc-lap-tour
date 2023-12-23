import React from 'react'
import RateStars from './RateStars'

const IndividualReview = ({reviewData}) => {
  let dataDetail = reviewData.details
  let priceData, customerCareData, websiteData = null;
  dataDetail.map(item => {
    if(item?.tagRate?.tag?.id == 1){
      priceData = item 
    }else if(item?.tagRate?.tag?.id == 2){
      customerCareData = item
    }else if(item?.tagRate?.tag?.id == 2){
      websiteData = item
    }
  })
  return (
    <div 
    style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem', backgroundColor: '#F7F7F7', borderRadius: "0.7rem", padding: '20px 20px 20px 30px', position:'relative'}}>
        <p className='font-medium' 
          style={{fontSize: '1.1rem', position: 'absolute', top:'20px', right: '30px'}}>
            {formatDate(reviewData.dateReview)}
        </p>
        <p className='font-medium' style={{fontSize: '1.1rem'}}>{reviewData.user?.name}</p>
        <RateStars star={reviewData.rate} />
        {
          (priceData != null) &&
          <p className='font-normal' style={{fontSize: '1.1rem'}}><span className='font-medium'>Giá vé:</span> {priceData.tagRate?.content}</p>
        }
        {
          (customerCareData != null) &&
          <p className='font-normal' style={{fontSize: '1.1rem', marginTop: '6px'}}><span className='font-medium'>Chăm sóc khách hàng: </span> {customerCareData.tagRate?.content}</p>
        }
        {
          (websiteData != null) &&
          <p className='font-normal' style={{fontSize: '1.1rem', marginTop: '6px'}}><span className='font-medium'>Website:</span> {websiteData.tagRate?.content}</p>
        }
        <p className='font-normal' style={{fontSize: '1.1rem', marginTop: '6px'}}>{reviewData.content}</p>
    </div>
  )
}

export default IndividualReview

function formatDate(inputDate) {
  // Convert input string to Date object
  const inputDateTime = new Date(inputDate);

  // Format Date object to desired string format
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const outputDate = inputDateTime.toLocaleDateString('en-GB', options);

  return outputDate;
}
