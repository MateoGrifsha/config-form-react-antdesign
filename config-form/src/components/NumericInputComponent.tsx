import React, { useState, useContext } from 'react'
import { InputNumber } from 'antd';
import { DataContext } from '../App';

interface Props{
    label:string,
    negative:boolean,
    value: string
}

export default function NumericInputComponent({label, negative, value}:Props) {
  const data:any = useContext(DataContext)
  const [dataValue, setDataValue] = useState(data[0][value])
  
  return (
    <>
        <div className='numericInputContainer'>
          <p>{label}:</p>
          <InputNumber min={negative?-9999:0} placeholder={`Type ${label} here`} value={dataValue}/>
        </div>
    </>
  )
}
