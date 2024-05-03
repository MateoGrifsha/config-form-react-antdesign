import React from 'react'
import TagInputComponent from './TagInputComponent'

export default function TagInputGroup() {
  const currencies:string[] = ['ALL','EUR', 'USD']
  const paymentType:string[] = ['CSH', 'CSH1', 'CSH2', 'CSH3']
  const distributionChannels:string[] = ['CSH4', 'CSH5', 'CSH6', 'CSH7']
  const waitingPeriodTypeAllowed:string[] = ['CSH8', 'CSH9', 'CSH10', 'CSH11']
  const riskAddressTypesAllowed:string[] = ['CSH12', 'CSH13', 'CSH14', 'CSH15']
  return (
    <div style={{border: 'thin solid red'}}>
        <TagInputComponent inputs={currencies} label='Currency: ' value='currencyTypesAllowed'/><br />
        <TagInputComponent inputs={paymentType} label='Payment Type: ' value='paymentTypesAllowed'/><br />
        <TagInputComponent inputs={distributionChannels} label='Distribution Channels: ' value='distributionChannelTypesAllowed'/><br />
        <TagInputComponent inputs={waitingPeriodTypeAllowed} label='Waiting Period: ' value='waitingPeriodTypeAllowed'/><br />
        <TagInputComponent inputs={riskAddressTypesAllowed} label='Risk Address: ' value='riskAddressTypesAllowed'/>
    </div>
  )
}
