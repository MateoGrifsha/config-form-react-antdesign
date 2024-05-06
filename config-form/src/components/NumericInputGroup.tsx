import React from 'react'
import NumericInputComponent from './NumericInputComponent'

export default function NumericInputGroup() {
  return (
    <>
        <div className='dateInputContainer' >
          <div className='dateInputContainerRow'>
              <NumericInputComponent label ='defaultStartDateUtcDiff'value='defaultStartDateUtcDiff' negative = {false}/>    
              <NumericInputComponent label ='minStartDateUtcDiff'value='minStartDateUtcDiff' negative = {true}/>    
              <NumericInputComponent label ='maxStartDateUtcDiff'value='maxStartDateUtcDiff' negative = {false}/>  
          </div>
          <div className='dateInputContainerRow'>
              <NumericInputComponent label ='defaultIssueDateUtcDiff'value='defaultIssueDateUtcDiff' negative = {false}/>    
              <NumericInputComponent label ='minIssueDateUtcDiff'value='minIssueDateUtcDiff' negative = {true}/>    
              <NumericInputComponent label ='maxIssueDateUtcDiff'value='maxIssueDateUtcDiff' negative = {false}/>    
          </div>   
        </div>
    </>
  )
}
