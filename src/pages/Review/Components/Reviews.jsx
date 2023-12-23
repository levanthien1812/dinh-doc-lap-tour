import React from 'react'
import {data} from "./data"
import IndividualReview from './IndividualReview'
import Pagination from '@mui/material/Pagination';

const Reviews = ({isPage}) => {
    // Get data
    console.log("data");
console.log(data);
  return (
    <div>
        {data.map((item) => 
          <IndividualReview reviewData={item}/>
        )}
        {
          isPage && 
          <div style={{width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
            <Pagination count={10} shape="rounded" size="large" />
          </div>
        }
        
    </div>
  )
}

export default Reviews