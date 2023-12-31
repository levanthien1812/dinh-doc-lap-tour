import React from 'react'

const Arrow = ({rotate}) => {   
  return (
    <div style={{
        width: 'fit-content',
        display: 'inline-block',
        padding: '0',
        top: '20px',
        right: '14px',
        position: 'absolute'
    }}>
       <svg transform={rotate ? "rotate(180)" : "rotate(0)"} width="32" height="32" id="arrow"><path d="M16.682 19.674c.01-.012.014-.028.024-.04l6.982-7.714c.39-.434.39-1.138 0-1.572-.004-.004-.008-.006-.012-.008a.936.936 0 0 0-.712-.34H8.998a.948.948 0 0 0-.722.352l-.004-.004a1.202 1.202 0 0 0 0 1.572l6.998 7.754a.928.928 0 0 0 1.412 0z"></path></svg>
    </div>
    
  )
}

export default Arrow