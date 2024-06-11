import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../../App'

interface Props{
    rowData:any,
    allKeys: string[],
    emailConfigKeys: string[]
}
export default function TableBody({rowData, allKeys, emailConfigKeys}:Props) {
    
    const renderValue = (key:string, value:any, state:any)=>{
        if (Array.isArray(value)) { //for values that are arrays like: payment methods and currency types
                return (
                    <>
                      {value.map((el, index) => (
                        <span key={index}>{el?.text || el.toString()},&nbsp;</span>
                      ))}
                    </>
                );
          }
        if(emailConfigKeys.includes(key)){ // for email configurations. each subkey of email configs is a new column so each value can be represented in its own
            const emailKeys = rowData['emailConfigurations'][0]
            const emailValue = emailKeys[key]

            if(emailValue === null || typeof emailValue === 'undefined'){ //for null values in email configs 
                return <span>null</span>
            }
            else if(Array.isArray(emailValue)){ // for customCc and customBcc  
                return(
                    <>
                        {emailValue.map((email, index)=>(
                            <span key={index}>{email.toString()},&nbsp;  </span>
                        ))}
                    </>
                )
            }
            //for boolean values in email configs
            return <span>{emailKeys[key].toString()}</span>
            
        }
        if(value === null){ // for null values in data object
            return <span>false</span>;
        } 
        //primitive data types in data object
        return <span>{value.toString()}</span>
        
    }

  return (
     <>
        {allKeys.map(x=>( //prints each data in its corresponding cell
            <div className='table-row-item' key={x}>
                {renderValue(x, rowData[x], rowData)}
            </div>
        ))}
    </>
  )
}
