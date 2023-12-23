import React, { useState } from 'react';
import RateStars from './RateStars'
import RateStarsControl from './RateStarsControl';
import {Button, TextField} from '@mui/material'

const ReviewForm= () => {
  let review = "Chưa hợp lý"
  let starNum = 2

  // Gia ve
  const [priceRate, setPriceRate] = useState(5)

  // Customer care
  const [customerCareRate, setCustomerCareRate] = useState(5)

  // Customer care
  const [websiteRate, setWebsiteRate] = useState(5)

  console.log("priceRate: ", priceRate)
  console.log("customer: ", customerCareRate)
  console.log("website: ", websiteRate)

  return (
    <div  style={{width: '70%', marginLeft: 'auto', marginRight: 'auto'}}>
      
      <div style={{display: 'flex', padding: '0', height: 'fit-content'}}>
        <div style={{width: '50%', padding: '0', height: 'fit-content'}}>
            <p style={{textAlign: 'start', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>Để lại đánh giá</p>
        </div>
        <div style={{width: '50%', padding: '0', height: 'fit-content'}}>
          <div style={{marginLeft: 'auto', width: 'fit-content'}}>
            <RateStarsControl setRate={setPriceRate} width={'50px'} />
          </div>          
        </div>
      </div>

      <div style={{display: 'flex', padding: '0', height: 'fit-content'}}>
        <div style={{width: '24%', padding: '0', height: 'fit-content'}}>
            <p style={{textAlign: 'end', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>Giá vé</p>
        </div>
        <div style={{width: '52%', padding: '0', height: 'fit-content'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
            <RateStarsControl setRate={setPriceRate} width={'50px'} />
          </div>          
        </div>
        <div style={{width: '24%', padding: '0', height: 'fit-content'}}>
          <p style={{textAlign: 'start', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>{review}</p>
        </div>
      </div>

      <div style={{display: 'flex', padding: '0', height: 'fit-content'}}>
        <div style={{width: '24%', padding: '0', height: 'fit-content'}}>
            <p style={{textAlign: 'end', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>Chăm sóc khách hàng</p>
        </div>
        <div style={{width: '52%', padding: '0', height: 'fit-content'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
            <RateStarsControl setRate={setCustomerCareRate} width={'50px'} />
          </div>          
        </div>
        <div style={{width: '24%', padding: '0', height: 'fit-content'}}>
          <p style={{textAlign: 'start', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>{review}</p>
        </div>
      </div>

      <div style={{display: 'flex'}}>
        <div style={{width: '24%'}}>
            <p style={{textAlign: 'end', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>Website</p>
        </div>
        <div style={{width: '52%'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
            <RateStarsControl setRate={setWebsiteRate} width={'50px'} />
          </div>          
        </div>
        <div style={{width: '24%'}}>
          <p style={{textAlign: 'start', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>{review}</p>
        </div>
      </div>

      <div>
        <TextField fullWidth label="Đánh giá thêm ..." id="fullWidth" />
      </div>

      <div style={{marginLeft: 'auto', width: 'fit-content'}}>
        <Button style={{marginRight: "auto", backgroundColor: "#C8AB5C", color: "white", fontWeight: '500', fontSize: '24px', height: '62px', lineHeight: '62px', padding: '2px 10px 2px 10px'}} > 
          Gửi đánh giá 
        </Button>
      </div>
      
    </div>
  )
}

export default ReviewForm