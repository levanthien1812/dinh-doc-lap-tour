import React, { useState } from 'react';
import Star from './Star'
import Arrow from './Arrow';

const ReviewFilter = () => {
    // Filter Option Component
    const [dropRotate, setDropRotate] = useState(false);
    const [optionDisplay, setOptionDisplay] = useState(false);
    const [optionChosen, setOptionChosen] = useState("Tổng quan");
    const handleFilterOption = () => {
        setOptionDisplay(!optionDisplay)
        setDropRotate(!dropRotate);
    }

    // Total
    const [liStyleTotal, setLiStyleTotal] = useState({
        padding: '20px 0 7px 0',
        fontWeight: '400',
        color: '#000',
    });
    
    const handleHoverTotal = () => {
        setLiStyleTotal((prevStyle) => ({ ...prevStyle, color: '#C8AB5C' }));
    };
    
    const handleLeaveTotal = () => {
        setLiStyleTotal((prevStyle) => ({ ...prevStyle, color: '#000' }));
    };

    const handleChooseTotal = () => {
        setOptionChosen("Tổng quan");
    };
    // Price
    const [liStylePrice, setLiStylePrice] = useState({
        padding: '7px 0 7px 0',
        fontWeight: '400',
        color: '#000',
    });
    
    const handleHoverPrice = () => {
        setLiStylePrice((prevStyle) => ({ ...prevStyle, color: '#C8AB5C' }));
    };
    
    const handleLeavePrice = () => {
        setLiStylePrice((prevStyle) => ({ ...prevStyle, color: '#000' }));
    };

    const handleChoosePrice = () => {
        setOptionChosen("Giá vé");
    };

    const handleChooseCustomerCare = () => {
        setOptionChosen("Chăm sóc khách hàng");
    };

    const handleChooseWebsite = () => {
        setOptionChosen("Website");
    };

    // Customer Care 
    const [liStyleCare, setLiStyleCare] = useState({
        padding: '7px 0 7px 0',
        fontWeight: '400',
        color: '#000',
    });
    
    const handleHoverCare = () => {
        setLiStyleCare((prevStyle) => ({ ...prevStyle, color: '#C8AB5C' }));
    };
    
    const handleLeaveCare = () => {
        setLiStyleCare((prevStyle) => ({ ...prevStyle, color: '#000' }));
    };

    // Website
    const [liStyleWebsite, setLiStyleWebsite] = useState({
        padding: '7px 0 20px 0',
        fontWeight: '400',
        color: '#000',
    });
    
    const handleHoverWebsite = () => {
        setLiStyleWebsite((prevStyle) => ({ ...prevStyle, color: '#C8AB5C' }));
    };
    
    const handleLeaveWebsite = () => {
        setLiStyleWebsite((prevStyle) => ({ ...prevStyle, color: '#000' }));
    };

    // Rate Star Handle
    const [rateStarFilter, setRateStarFilter] = useState(5); 

    const [starIcon1, setStarIcon1] = useState("black"); 
    const [rateStar1, setRateStar1] = useState({
        backgroundColor: 'white',
        color: 'black',
        padding: '15px 70px 15px 25px', 
        border: '2px solid #B0B0B0', 
        borderRadius: '10px', 
        position: 'relative'
    }); 
    
    const [starIcon2, setStarIcon2] = useState("black"); 
    const [rateStar2, setRateStar2] = useState({
        backgroundColor: 'white',
        color: 'black',
        padding: '15px 70px 15px 25px', 
        border: '2px solid #B0B0B0', 
        borderRadius: '10px', 
        position: 'relative'
    }); 

    
    const [starIcon3, setStarIcon3] = useState("black"); 
    const [rateStar3, setRateStar3] = useState({
        backgroundColor: 'white',
        color: 'black',
        padding: '15px 70px 15px 25px', 
        border: '2px solid #B0B0B0', 
        borderRadius: '10px', 
        position: 'relative'
    }); 

    const [starIcon4, setStarIcon4] = useState("black"); 
    const [rateStar4, setRateStar4] = useState({
        backgroundColor: 'white',
        color: 'black',
        padding: '15px 70px 15px 25px', 
        border: '2px solid #B0B0B0', 
        borderRadius: '10px', 
        position: 'relative'
    }); 

    const [starIcon5, setStarIcon5] = useState("white"); 
    const [rateStar5, setRateStar5] = useState({
        backgroundColor: '#C8AB5C',
        color: 'white',
        padding: '15px 70px 15px 25px', 
        border: '2px solid white', 
        borderRadius: '10px', 
        position: 'relative'
    }); 

    const handleRate1 = () => {
        setRateStar1((prevStyle) => ({ ...prevStyle, backgroundColor: '#C8AB5C', color: 'white', border: '2px white solid' }));
        setStarIcon1("white");

        setRateStar2((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon2("black");

        setRateStar3((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon3("black");

        setRateStar4((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon4("black");

        setRateStar5((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon5("black");
    };

    const handleRate2 = () => {
        setRateStar2((prevStyle) => ({ ...prevStyle, backgroundColor: '#C8AB5C', color: 'white', border: '2px white solid' }));
        setStarIcon2("white");

        setRateStar1((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon1("black");

        setRateStar3((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon3("black");

        setRateStar4((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon4("black");

        setRateStar5((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon5("black");
    };

    const handleRate3 = () => {
        setRateStar3((prevStyle) => ({ ...prevStyle, backgroundColor: '#C8AB5C', color: 'white', border: '2px white solid' }));
        setStarIcon3("white");

        setRateStar1((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon1("black");

        setRateStar2((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon2("black");

        setRateStar4((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon4("black");

        setRateStar5((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon5("black");
    };

    const handleRate4 = () => {
        setRateStar4((prevStyle) => ({ ...prevStyle, backgroundColor: '#C8AB5C', color: 'white', border: '2px white solid' }));
        setStarIcon4("white");

        setRateStar2((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon2("black");

        setRateStar3((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon3("black");

        setRateStar1((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon1("black");

        setRateStar5((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon5("black");
    };

    const handleRate5 = () => {
        setRateStar5({
            backgroundColor: '#C8AB5C',
            color: 'white',
            padding: '15px 70px 15px 25px', 
            border: '2px solid white', 
            borderRadius: '10px', 
            position: 'relative'
        });
        setStarIcon5("white");

        setRateStar2((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon2("black");

        setRateStar3((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon3("black");

        setRateStar4((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon4("black");

        setRateStar1((prevStyle) => ({ ...prevStyle, backgroundColor: 'white', color: 'black', border: '2px #B0B0B0 solid'}));
        setStarIcon1("black");
    };

  return (
    <div style={{ display: 'flex', justifyContent : 'space-between',marginLeft: 'auto', marginRight:'auto', width: '55%'}}>
        <div style={{position: 'relative'}}>
            <button style={{padding: '15px 40px 15px 10px', border: '2px solid #B0B0B0', borderRadius: '10px', position:'relative', width: '110%'}} onClick={handleFilterOption}>
                {optionChosen}
                <Arrow rotate={dropRotate}/>
            </button>
            {optionDisplay && 
                <div 
                    style={{position: 'absolute', top: '100px', left: '-50px', 
                        backgroundColor: 'white', zIndex: '100',paddingBottom: '0px',  width: '300px'}}>
                    <ul style={{border: '2px solid #B0B0B0',  borderRadius: '10px', listStyle: 'none', padding: '0 40px 0 20px'}}>
                        <li value="Tổng quan" style={liStyleTotal}
                                onClick={handleChooseTotal}
                                onMouseEnter={handleHoverTotal}
                                onMouseLeave={handleLeaveTotal}> Tổng quan </li>
                        <li  style={liStylePrice}
                                onClick={handleChoosePrice}
                                onMouseEnter={handleHoverPrice}
                                onMouseLeave={handleLeavePrice}> Giá vé </li>
                        <li  style={liStyleCare}
                                onClick={handleChooseCustomerCare}
                                onMouseEnter={handleHoverCare}
                                onMouseLeave={handleLeaveCare}> Chăm sóc khách hàng </li>
                        <li  style={liStyleWebsite}
                                onClick={handleChooseWebsite}
                                onMouseEnter={handleHoverWebsite}
                                onMouseLeave={handleLeaveWebsite}> Website </li>
                    </ul>
                </div>
            }
            
        </div>
        <div>
            <button style={rateStar1} onClick={handleRate1}>
                1
                <div style={{display: 'inline-block', position: 'absolute', left: '55px', top: '15px', paddingBottom: '0'}}>
                    <Star color={starIcon1} width="24px"/>
                </div>
            </button>
        </div>
        
        <div>
            <button style={rateStar2} onClick={handleRate2}>
                2
                <div style={{display: 'inline-block', position: 'absolute', left: '55px', top: '15px', paddingBottom: '0'}}>
                    <Star color={starIcon2} width="24px"/>
                </div>
            </button>
        </div>

        <div>
            <button style={rateStar3} onClick={handleRate3}>
                3
                <div style={{display: 'inline-block', position: 'absolute', left: '55px', top: '15px', paddingBottom: '0'}}>
                    <Star color={starIcon3} width="24px"/>
                </div>
            </button>
        </div>

        <div>
            <button style={rateStar4} onClick={handleRate4}>
                4
                <div style={{display: 'inline-block', position: 'absolute', left: '55px', top: '15px', paddingBottom: '0'}}>
                    <Star color={starIcon4} width="24px"/>
                </div>
            </button>
        </div>

        <div>
            <button style={rateStar5} onClick={handleRate5}>
                5
                <div style={{display: 'inline-block', position: 'absolute', left: '55px', top: '15px', paddingBottom: '0'}}>
                    <Star color={starIcon5} width="24px"/>
                </div>
            </button>
        </div>
    </div>
    
  )
}

export default ReviewFilter