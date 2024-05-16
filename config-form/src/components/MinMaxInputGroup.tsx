import React, {useContext} from 'react'
import MinMaxInputComponent from './MinMaxInputComponent'
import { minMaxInputValues as inputValues } from './constants/Constants'
import { DataContext } from '../App'
export default function MinMaxInputGroup() {
  const {error} = useContext(DataContext)

  return (
    <>
      <div className='error-label-row'>
        <h2 className='section-label'>Number of users: </h2>
        {error && <div className='error-box'>Minimum cannot be bigger than maximum!</div>}
      </div>
      <div className="minMaxGroup duoNumberInputRow">
        <div className='minimumMaximumLabel'>
            <p>min</p>
            <p>max</p>
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
