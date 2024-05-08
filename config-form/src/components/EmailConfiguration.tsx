import React from 'react'
import TrueFalseComponent from './TrueFalseComponent'
import EmailConfigTag from './EmailConfigTag'
import { emailRadioProperties as radioProperties, emailRadioQuestions as radioQuestions } from './constants/Constants'
export default function EmailConfiguration() {

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
