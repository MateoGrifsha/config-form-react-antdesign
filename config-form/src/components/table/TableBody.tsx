import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../../App'

export default function TableBody() {
    const {data} = useContext(DataContext)
    const allKeys = Object.keys(data)
    allKeys.pop() //pop configurations to push the subkeys as a column instead
    const [prevStates, setPrevStates] = useState(Array)
    const additionalKeys = Object.keys(data['emailConfigurations'][0])

    additionalKeys.forEach(newEl => allKeys.push(newEl)); // adding the email configs subkeys as columns
    
    useEffect(()=>{
        setPrevStates((prev)=>([...prev, data]))
    }, [data])
    
    const renderValue = (key:string, value:any, state:any)=>{

        if (Array.isArray(value)) { //for values that are arrays like: payment methods and currency types
                return (
                    <>
                      {value.map((el, index) => (
                        <span key={index}>{el?.text || el.toString()},</span>
                      ))}
                    </>
                );
          }
        else if(additionalKeys.includes(key)){ // for email configurations. each subkey of email configs is a new column so each value can be represented in its own
            const emailKeys = state['emailConfigurations'][0]
            const emailValue = emailKeys[key]
            if(emailValue === null || typeof emailValue === 'undefined'){ //for null values in email configs 
                return <span>false</span>
            }
            else if(Array.isArray(emailValue)){ // for customCc and customBcc  
                return(
                    <>
                        {emailValue.map((email, index)=>(
                            <span key={index}>{email.toString()}, </span>
                        ))}
                    </>
                )
            }
            //for boolean values in email configs
            return <span>{emailKeys[key].toString()}</span>
            
        }
        else if(value === null){ // for null values in data object
            return <span>false</span>;
        }
        return <span>{value.toString()}</span>
        
    }
  return (
    <div className='table-body-container'>
        {prevStates.map((state:any, stateIndex:number) =>( //prints all rows
            <div key={stateIndex}>
                {allKeys.map(x=>( //prints each data in its corresponding cell
                    <div className='table-body-item' key={x}>
                        {renderValue(x, state[x], state)}
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}
