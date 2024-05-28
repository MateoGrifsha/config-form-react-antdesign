import React from 'react'
import NumericInputComponent from './NumericInputComponent'

export default function NumericInputGroup() {
  const todaysDate = new Date().toDateString()

  return (
    <>
        <h2 className='section-label'>Starting & Issuing Dates: </h2>
        <span className='todays-date'>{todaysDate}</span>
        <div className='dateInputContainer' >
          <div className='subgroup'>
            <h3 className="subgroup-label">Starting dates:</h3>
            <div className='dateInputContainerRow'>
                <NumericInputComponent label ='Default start date'value='defaultStartDateUtcDiff' negative = {true}/>    
                <NumericInputComponent label ='Minimum start date'value='minStartDateUtcDiff' negative = {true}/>    
                <NumericInputComponent label ='Maximum start date'value='maxStartDateUtcDiff' negative = {true}/>  
            </div>
          </div>
         <div className='subgroup'>
          <h3 className="subgroup-label">Issuing dates:</h3>
            <div className='dateInputContainerRow'>
                <NumericInputComponent label ='Default issue date'value='defaultIssueDateUtcDiff' negative = {true}/>    
                <NumericInputComponent label ='Minimum issue date'value='minIssueDateUtcDiff' negative = {true}/>    
                <NumericInputComponent label ='Maximum issue date'value='maxIssueDateUtcDiff' negative = {true}/>    
            </div>   
         </div>
        </div>
    </>
  )
}
