import React from 'react'
import {data} from "./data"
import IndividualReview from './IndividualReview'
import Pagination from '@mui/material/Pagination';

const Reviews = () => {
    // Get data
    console.log("data");
console.log(data);
  return (
    <div>
        {data.map((item) => 
          <IndividualReview reviewData={item}/>
        )}

    <Pagination count={10} shape="rounded" />
    </div>
  )
}

export default Reviews