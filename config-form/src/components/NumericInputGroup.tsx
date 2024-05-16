import React from 'react'
import NumericInputComponent from './NumericInputComponent'

export default function NumericInputGroup() {
  return (
    <>
        <h2 className='section-label'>Group 2: </h2>
        <div className='dateInputContainer' >
          <div className='subgroup'>
            <h3 className="subgroup-label">Subgroup 2.1:</h3>
            <div className='dateInputContainerRow'>
                <NumericInputComponent label ='Default start date'value='defaultStartDateUtcDiff' negative = {false}/>    
                <NumericInputComponent label ='Minimum start date'value='minStartDateUtcDiff' negative = {true}/>    
                <NumericInputComponent label ='Maximum start date'value='maxStartDateUtcDiff' negative = {false}/>  
            </div>
          </div>
         <div className='subgroup'>
          <h3 className="subgroup-label">Subgroup 2.2:</h3>
            <div className='dateInputContainerRow'>
                <NumericInputComponent label ='Default issue date'value='defaultIssueDateUtcDiff' negative = {false}/>    
                <NumericInputComponent label ='Minimum issue date'value='minIssueDateUtcDiff' negative = {true}/>    
                <NumericInputComponent label ='Maximum issue date'value='maxIssueDateUtcDiff' negative = {false}/>    
            </div>   
         </div>
        </div>
    </>
  )
}
