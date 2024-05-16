import React from 'react'
import TrueFalseComponent from './TrueFalseComponent'
import EmailConfigTag from './EmailConfigTag'
import { emailRadioProperties as radioProperties, emailRadioQuestions as radioQuestions } from './constants/Constants'
export default function EmailConfiguration() {

  return (
    <>
           <div className='email-section'>
            <div className='email-radio-container subgroup'>
                <h3 className="subgroup-label">Subgroup 5.1: </h3>
                {radioProperties.map(x=>(
                  <TrueFalseComponent label={radioQuestions[radioProperties.indexOf(x)]} value = {radioProperties[radioProperties.indexOf(x)]} key={radioProperties.indexOf(x)}/>
              ))}
              </div>
              <div className="email-tag-container subgroup">
                <h3 className="subgroup-label">Subgroup 5.2:</h3>
                <div>
                  <p>Custom CC:</p><EmailConfigTag value={'customCc'}/>
                  <p>Custom BCC:</p><EmailConfigTag value={'customBcc'}/>
                </div>
              </div>
           </div>
    </>
  )
}
