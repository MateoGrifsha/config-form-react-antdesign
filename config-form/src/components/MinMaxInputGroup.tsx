import React from 'react'
import MinMaxInputComponent from './MinMaxInputComponent'
import { minMaxInputValues as inputValues } from './constants/Constants'
export default function MinMaxInputGroup() {
  return (
    <>
      <h2 className='section-label'>Group 3: </h2>
      <div className="minMaxGroup">
        <div className='minimumMaximumLabel'>
          <div>
            <p>Minimum</p>
            <p>Maximum</p>
          </div>
        </div>
        <div>
          <MinMaxInputComponent label="Beneficiary: " values={inputValues[0]}/>
          <MinMaxInputComponent label="Policy Holder: " values={inputValues[1]}/>
          <MinMaxInputComponent label="Policy User: " values={inputValues[2]}/>
          <MinMaxInputComponent label="Insurer: " values={inputValues[3]}/>
          <MinMaxInputComponent label="Invoice Recipient: " values={inputValues[4]}/>
        </div>
      </div>
    </>
  )
}
