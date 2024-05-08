import React from 'react'
import MinMaxInputComponent from './MinMaxInputComponent'
import { minMaxInputValues as inputValues } from './constants/Constants'
export default function MinMaxInputGroup() {
  return (
    <div>
        <MinMaxInputComponent label="Beneficiary: " values={inputValues[0]}/>
        <MinMaxInputComponent label="Policy Holder: " values={inputValues[1]}/>
        <MinMaxInputComponent label="Policy User: " values={inputValues[2]}/>
        <MinMaxInputComponent label="Insurer: " values={inputValues[3]}/>
        <MinMaxInputComponent label="Invoice Recipient: " values={inputValues[4]}/>
    </div>
  )
}
