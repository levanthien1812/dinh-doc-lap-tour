import {React, useState} from 'react'
import Reviews from './Components/Reviews'
import ReviewForm from './Components/ReviewForm'
import TotalReview from './Components/TotalReview'
import ReviewFilter  from './Components/ReviewFilter'

const Review = () => {
  const [isMainComponent, setMainComponent ] = useState(true);
  // useEffect(() => {
      
  // }, [isMainComponent]);

  const handleClick = () => {
    setMainComponent(!isMainComponent);
  };

  return (
    <div>
      <p className='text-center'
        style={{marginTop: '3rem', marginBottom: '3rem', fontSize: '32px', fontWeight: '600'}}>
        CÁC ĐÁNH GIÁ VỀ DINH ĐỘC LẬP
      </p>

      {isMainComponent && <TotalReview /> || <ReviewFilter />}

      {isMainComponent && 
        <div style={{marginLeft: 'auto', marginRight:'auto', width: '70%', textAlign: 'end'}}>
          <a href='#' onClick={handleClick} style={{fontWeight: '400', color: '#C8AB5C', textDecoration:'none'}}>Xem tất cả 
          <svg style={{display: 'inline-block', marginLeft: '10px'}}
              height="20" width="20" viewBox="0 0 448 512"><path fill="#C8AB5C" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </a>
        </div>
        ||
        <div style={{marginLeft: 'auto', marginRight:'auto', width: '70%', textAlign: 'start'}}>
          <a href='#' onClick={handleClick} style={{fontWeight: '400', color: '#C8AB5C', textDecoration:'none'}}>
          <svg style={{display: 'inline-block', marginRight: '10px', transform: 'rotate(180deg)'}} height="16" width="14" viewBox="0 0 448 512"><path  fill="#C8AB5C" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            Trở về
          </a>
        </div>
      }
      
      
      <Reviews isPage={!isMainComponent}/>
      {isMainComponent && <ReviewForm />}
    </div>
  )
}

export default Review
