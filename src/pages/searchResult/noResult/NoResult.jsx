import React from 'react'
import './NoResult.scss'

const NoResult = () => {
  return (
    <div className="error">
        <div className="emoji flex">😢</div>
        <div className="message flex">Sorry, No Result Found !!!.</div>
    </div>
  )
}

export default NoResult