import React from 'react'
import TagInputComponent from './TagInputComponent'
import { currencies, paymentType, distributionChannels, waitingPeriodTypeAllowed, riskAddressTypesAllowed } from './constants/Constants'
export default function TagInputGroup() {

  return (
    <div>
        <TagInputComponent inputs={currencies} label='Currency: ' value='currencyTypesAllowed'/><br />
        <TagInputComponent inputs={paymentType} label='Payment Type: ' value='paymentTypesAllowed'/><br />
        <TagInputComponent inputs={distributionChannels} label='Distribution Channels: ' value='distributionChannelTypesAllowed'/><br />
        <TagInputComponent inputs={waitingPeriodTypeAllowed} label='Waiting Period: ' value='waitingPeriodTypeAllowed'/><br />
        <TagInputComponent inputs={riskAddressTypesAllowed} label='Risk Address: ' value='riskAddressTypesAllowed'/>
    </div>
  )
}
