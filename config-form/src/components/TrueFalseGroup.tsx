import React from 'react'
import TrueFalseComponent from './TrueFalseComponent'
export default function TrueFalseGroup() {
    const radioProperties = ['canSell', "canCancel", "canReturn", "canDuplicate", "canAdjustPremium", "hasInstallments","hasRenewals"]
    const radioQuestions = ['canSell', "canCancel", "canReturn", "canDuplicate", "canAdjustPremium", "hasInstallments","hasRenewals"]

  return (
    <>
        <div className='trueFalseGroup'>
            {radioQuestions.map(x=>(
                <TrueFalseComponent label={radioQuestions[radioQuestions.indexOf(x)]} value = {radioProperties[radioProperties.indexOf(x)]}/>
            ))}
        </div>
    </>
  )
}
