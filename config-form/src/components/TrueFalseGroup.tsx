import React from 'react'
import TrueFalseComponent from './TrueFalseComponent'
import { radioProperties, radioQuestions } from './constants/Constants'
export default function TrueFalseGroup() {
  return (
    <>
        <h2 className='section-label'>Product Information and Specifications:</h2>
        <div className='trueFalseGroup' >
            {radioProperties.map(x=>(
                <TrueFalseComponent key={radioProperties.indexOf(x)} label={radioQuestions[radioProperties.indexOf(x)]} value = {radioProperties[radioProperties.indexOf(x)]}/>
            ))}
        </div>
    </>
  )
}
