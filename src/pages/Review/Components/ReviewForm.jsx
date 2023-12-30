import React, { useState } from 'react';
import RateStars from './RateStars'
import RateStarsControl from './RateStarsControl';
import { tagConst } from './tagConst';
import axios from 'axios';

const ReviewForm= ({setReloadData, reloadData}) => {

  // Total
  const [totalRate, setTotalRate] = useState(5)

  // Gia ve
  const [priceReview, setPriceReview] = useState("hợp lý")
  const [priceRate, setPriceRate] = useState(5)

  // Customer care
  const [customerCareReview, setCustomerCareReview] = useState("rất tốt")
  const [customerCareRate, setCustomerCareRate] = useState(5)

  // Customer care
  const [websiteReview, setWebsiteReview] = useState("dễ sử dụng")
  const [websiteRate, setWebsiteRate] = useState(5)

  const [submitContentId, setSubmitContentId] = useState(0)
  const handleSubmitForm = () => {
    
    let reviewContent ={
      content: document.getElementById("reviewContent").value,
      rate: totalRate
    }
    console.log(reviewContent);
    let url ="http://khoahocsub.com:9090/api/reviews/user/1"
    let urlDetail = " http://localhost:9090/api/reviews/5/tag-rate/7"

    axios.post(url, reviewContent)
    .then(response => {
      // Xử lý response nếu cần
      console.log(response.data.Id);
      setSubmitContentId(response.data.Id)
      setReloadData(!reloadData)
    
      console.log("review new id: ", response.data.id)

      const detailReview = {
        "id":  response.data.id,
        "content": "reviewContent",
        "rate": 1,
        "dateReview": "2023-12-02T17:38:26.000+00:00",
        "user": {
            "id": 1,
            "name": "AT",
            "email": "123@gmail.com",
            "phone": "0123"
        },
        "details": [
            {
                "id": 11,
                "tagRate": {
                    "id": 13,
                    "rate": 3,
                    "content": "tương đối khó sử dụng",
                    "tag": {
                        "id": 3,
                        "name": "Website"
                    }
                }
            },
            {
                "id": 12,
                "tagRate": {
                    "id": 7,
                    "rate": 2,
                    "content": "cao",
                    "tag": {
                        "id": 1,
                        "name": "Giá vé"
                    }
                }
            }
        ]
    }
      // let urlDetail = "http://khoahocsub.com:9090/api/reviews/" +response.data.id+ "/tag-rate/7"
      
      // axios.post(urlDetail, detailReview)
      // .then(response => {
      //   console.log("seconde api", response.data)
      //   setReloadData(!reloadData)
      // })
      // .catch(error1 => {
      //   console.error('Error sending the review:', error1);
      // })
      
      })
     
    .catch(error => {
      // Xử lý error nếu có
      console.error('Error sending the review:', error);
    });

  }

  const priceRateConst = tagConst[0];
  const customerRateConst = tagConst[1];
  const websiteConst = tagConst[2];
  
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
            <RateStarsControl setRate={setTotalRate} width={'50px'} hasContent={false}/>
          </div>          
        </div>
      </div>

      <div style={{display: 'flex', padding: '0', height: 'fit-content'}}>
        <div style={{width: '24%', padding: '0', height: 'fit-content'}}>
            <p style={{textAlign: 'end', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>Giá vé</p>
        </div>
        <div style={{width: '52%', padding: '0', height: 'fit-content'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
            <RateStarsControl setRate={setPriceRate} width={'50px'} setContent={setPriceReview} rateConst={priceRateConst} hasContent={true}/>
          </div>          
        </div>
        <div style={{width: '24%', padding: '0', height: 'fit-content'}}>
          <p style={{textAlign: 'start', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>{priceReview}</p>
        </div>
      </div>

      <div style={{display: 'flex', padding: '0', height: 'fit-content'}}>
        <div style={{width: '24%', padding: '0', height: 'fit-content'}}>
            <p style={{textAlign: 'end', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>Chăm sóc khách hàng</p>
        </div>
        <div style={{width: '52%', padding: '0', height: 'fit-content'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
            <RateStarsControl setRate={setCustomerCareRate} width={'50px'} setContent={setCustomerCareReview} rateConst={customerRateConst} hasContent={true}/>
          </div>          
        </div>
        <div style={{width: '24%', padding: '0', height: 'fit-content'}}>
          <p style={{textAlign: 'start', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>{customerCareReview}</p>
        </div>
      </div>

      <div style={{display: 'flex'}}>
        <div style={{width: '24%'}}>
            <p style={{textAlign: 'end', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>Website</p>
        </div>
        <div style={{width: '52%'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content'}}>
            <RateStarsControl setRate={setWebsiteRate} width={'50px'}  setContent={setWebsiteReview} rateConst={websiteConst} hasContent={true}/>
          </div>          
        </div>
        <div style={{width: '24%'}}>
          <p style={{textAlign: 'start', lineHeight: '70px', height: '70px', color: '#C8AB5C'}}>{websiteReview}</p>
        </div>
      </div>

      <div>
        {/* <TextField fullWidth label="Đánh giá thêm ..." id="reviewContent" /> */}
        <div class="mb-6">
            <label for="reviewContent" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Để lại đánh giá</label>
            <input type="text" id="reviewContent" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            style={{height: '60px', color: '#4D4D4D', fontSize: '18px', padding: '0 0 0 10px'}} placeholder='Để lại đánh giá'/>
        </div>
      </div>

      <div style={{marginLeft: 'auto', width: 'fit-content'}}>
        {/* <Button style={{marginRight: "auto", backgroundColor: "#C8AB5C", color: "white", fontWeight: '500', fontSize: '24px', height: '62px', lineHeight: '62px', padding: '2px 10px 2px 10px'}} 
          onClick={handleSubmitForm}
        > 
          Gửi đánh giá 
        </Button> */}

        <button  style={{marginRight: "auto", marginBottom: '20px', backgroundColor: "#C8AB5C", color: "white", fontWeight: '500', fontSize: '24px', height: '62px', lineHeight: '62px', padding: '2px 10px 2px 10px', borderRadius: '10px'}} 
          onClick={handleSubmitForm}>
            Gửi đánh giá 
        </button>
      </div>
      
    </div>
  )
}

export default ReviewForm
