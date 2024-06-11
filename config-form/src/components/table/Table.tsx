import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../../App'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table() {
  const {data} = useContext(DataContext)
  const [prevStates, setPrevStates] = useState(Array)
  const allKeys = Object.keys(data)
  const additionalKeys = Object.keys(data['emailConfigurations'][0])

  additionalKeys.forEach(newEl => allKeys.push(newEl))
  const emailIndex = allKeys.indexOf('emailConfigurations')
  allKeys.splice(emailIndex, 1)
  
  useEffect(()=>{
    setPrevStates((prev)=>([...prev, data]))
}, [data])


  return (
    <div className='table-container'>
        <TableHeader />
        <div className='table-body-container'>
          <div className="scrollable">
            {prevStates.map((state:any, stateIndex:number) =>( //prints all rows
              <div className='table-body-row' key={stateIndex}>
                <TableBody rowData={state} emailConfigKeys={additionalKeys} allKeys={allKeys} />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
