import React from 'react'
import TrueFalseComponent from './TrueFalseComponent'
export default function TrueFalseGroup() {
    const radioProperties = ['canSell', "canCancel", "canReturn", "canDuplicate", "canAdjustPremium", "hasInstallments","hasRenewals"]
    const radioQuestions = ['Can be sold', "Can be canceled", "Can be returned", "Can be duplicated", "Can be adjusted to Premium", "It has installments","It has renewals"]

  return (
    <>
        <div className='trueFalseGroup' >
            {radioProperties.map(x=>(
                <TrueFalseComponent key={radioProperties.indexOf(x)} label={radioQuestions[radioProperties.indexOf(x)]} value = {radioProperties[radioProperties.indexOf(x)]}/>
            ))}
        </div>
    </>
  )
}
