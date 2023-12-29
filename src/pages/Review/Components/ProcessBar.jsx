import React from 'react'

const ProcessBar = ({currentNum, totalNum, index}) => {
    let percent = (currentNum / totalNum) * 100
    let percentStr = percent + '%'
    console.log(percentStr)
  return (
    <div style={{display: "flex"}}>
        <p style={{marginRight: "25px"}}>{index}</p>
        <div className="w-full  bg-gray-200 rounded-full dark:bg-gray-700"
        style={{height: '35px', backgroundColor:'#DBDBDB', width: '100%', borderRadius: '15px'}}>
            <div className=" bg-blue-600 rounded-full dark:bg-blue-500" style={{width: percentStr, height: '35px', backgroundColor: "#C8AB5C", borderRadius: '15px'}}>
            </div>
        </div>   
    </div>
    
  )
}

export default ProcessBar