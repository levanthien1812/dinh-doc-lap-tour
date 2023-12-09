import React from 'react'
import { useState } from 'react'

const Introduction = () => {
  const [height, setHeight] = useState(1000)

  return (
    <div className="introduction" style={{height}}>Introduction</div>
  )
}

export default Introduction
