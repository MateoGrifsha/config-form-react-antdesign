import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../../App'
import AGTable from './AGTable'

export default function Table() {
  const {data} = useContext(DataContext)
  const allKeys = Object.keys(data)
  const additionalKeys = Object.keys(data['emailConfigurations'][0])

  additionalKeys.forEach(newEl => allKeys.push(newEl))
  const emailIndex = allKeys.indexOf('emailConfigurations')
  allKeys.splice(emailIndex, 1)
  
  return (
    <>
      <AGTable allKeys={allKeys} emailKeys={additionalKeys}/>
    </>
  )
}
