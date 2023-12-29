import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {data} from "./data"
import IndividualReview from './IndividualReview'

const Reviews = ({isPage, data}) => {

  return (
    <div>
        {data.map((item) => 
          <IndividualReview reviewData={item}/>
        )}
        {
          isPage && 
          <div style={{width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px'}}>
            {/* <Pagination count={10} shape="rounded" size="large"  /> */}
          </div>
        }
        
    </div>
  )
}

export default Reviews