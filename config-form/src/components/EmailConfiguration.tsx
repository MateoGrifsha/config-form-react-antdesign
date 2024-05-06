import React from 'react'
import TrueFalseComponent from './TrueFalseComponent'
import EmailConfigTag from './EmailConfigTag'

export default function EmailConfiguration() {
    const radioProperties = ['shouldSendEmail', "sendToAgent", "sendToCustomer"]
    const radioQuestions = ['shouldSendEmail', "sendToAgent", "sendToCustomer"]
    

   
  return (
    <>
            {radioQuestions.map(x=>(
                <TrueFalseComponent label={radioQuestions[radioQuestions.indexOf(x)]} value={radioProperties[radioProperties.indexOf(x)]}/>
            ))}
            
            <p>Custom CC:</p><EmailConfigTag value={'customCc'}/>
            <p>Custom BCC:</p><EmailConfigTag value={'customBcc'}/>
    </>
  )
}
