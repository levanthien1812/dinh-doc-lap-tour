import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './Components/Reviews'
import ReviewForm from './Components/ReviewForm'
import TotalReview from './Components/TotalReview'
import ReviewFilter  from './Components/ReviewFilter'
import {dataTest} from './Components/data'

const Review = () => {
  const [isMainComponent, setMainComponent ] = useState(true);

  const handleClick = () => {
    setMainComponent(false);
  };

  const handleBackClick = () => {
    setMainComponent(true);
    setRateFilter(null)
    setOptionFilter(null)

  };
  // Get data
  const [data, setData] = useState(dataTest);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadData, setReloadData] = useState(false)

  // Fetch default data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://khoahocsub.com:9090/api/reviews');
        console.log("response: ", response)
        if(response.data == null){
          setData([]);
        }
        setData(response.data);
        setLoading(false);
      } catch (error) {
        // Handle errors
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    }, [reloadData]); 

    //Fetch filter data
    const [rateFilter, setRateFilter] = useState(null);
    const [optionFilter, setOptionFilter] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          let url = 'http://khoahocsub:9090/api/reviews/filter?'
          if(rateFilter != null){
            url += "rate=" + rateFilter
          }

          if(optionFilter != null && optionFilter != 0){
            url += "&tag-id=" + optionFilter
          }

          const response = await axios.get(url);
          console.log("response: ", response)
          if(response.data == null || response.data == ''){
            setData(new Array());
          }else{
            setData(response.data);
          }
          // setData(dataTest)
          setLoading(false);
        } catch (error) {
          // Handle errors
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [rateFilter, optionFilter ]); 

    console.log("data")
    console.log(typeof(data))
  if(!loading)
  return (
    <div>
      <p className='text-center'
        style={{marginTop: '3rem', marginBottom: '3rem', fontSize: '32px', fontWeight: '600'}}>
        CÁC ĐÁNH GIÁ VỀ DINH ĐỘC LẬP
      </p>

      {isMainComponent && <TotalReview data={data}/> || <ReviewFilter setRateFilter={setRateFilter} setOptionFilter={setOptionFilter}/>}

      {isMainComponent && 
        <div style={{marginLeft: 'auto', marginRight:'auto', width: '70%', textAlign: 'end'}}>
          <a href='#' onClick={handleClick} style={{fontWeight: '400', color: '#C8AB5C', textDecoration:'none'}}>Xem tất cả 
          <svg style={{display: 'inline-block', marginLeft: '10px'}}
              height="20" width="20" viewBox="0 0 448 512"><path fill="#C8AB5C" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </a>
        </div>
        ||
        <div style={{marginLeft: 'auto', marginRight:'auto', width: '70%', textAlign: 'start'}}>
          <a href='#' onClick={handleBackClick} style={{fontWeight: '400', color: '#C8AB5C', textDecoration:'none'}}>
          <svg style={{display: 'inline-block', marginRight: '10px', transform: 'rotate(180deg)'}} height="16" width="14" viewBox="0 0 448 512"><path  fill="#C8AB5C" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            Trở về
          </a>
        </div>
      }
      
    
      {({data} == null || {data} == []) && 
        <p>Chưa có đánh giá</p>
      }
      <Reviews isPage={!isMainComponent} data={data}/>
      {isMainComponent && <ReviewForm setReloadData={setReloadData} reloadData={reloadData}/>}
    </div>
  )
}

export default Review
