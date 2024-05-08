import React from 'react'
import TrueFalseComponent from './TrueFalseComponent'
import EmailConfigTag from './EmailConfigTag'

export default function EmailConfiguration() {
    const radioProperties = ['shouldSendEmail', "sendToAgent", "sendToCustomer"]
    const radioQuestions = ['Should be sent email', "Should be sent to agent", "Should be sent to customer"]
    

   
  return (
    <>
            {radioProperties.map(x=>(
                <TrueFalseComponent label={radioQuestions[radioProperties.indexOf(x)]} value = {radioProperties[radioProperties.indexOf(x)]} key={radioProperties.indexOf(x)}/>
            ))}
            
            <p>Custom CC:</p><EmailConfigTag value={'customCc'}/>
            <p>Custom BCC:</p><EmailConfigTag value={'customBcc'}/>
    </>
  )
}
