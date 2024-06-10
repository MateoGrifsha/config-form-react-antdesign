import React, {useContext} from 'react'
import { DataContext } from '../../App'

export default function TableHeader() {
    const {data} = useContext(DataContext)
    const allKeys = Object.keys(data)
    const additionalKeys =Object.keys(data['emailConfigurations'][0])
    allKeys.pop()
    additionalKeys.map(newEl => (
      allKeys.push(newEl)
    ))
  return (
    <div className='table-header-container'>
        {allKeys.map(x=>(
            <div className='table-header-item' key={x}>{x}</div>
        ))}
    </div>
  )
}
