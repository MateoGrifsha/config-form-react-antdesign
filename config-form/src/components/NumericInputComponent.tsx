import React, { useState, useContext, useRef, useEffect } from 'react'
import { InputNumber } from 'antd';
import { DataContext } from '../App';
import useUpdateObject from './hooks/useUpdateObject';


interface Props{
    label:string,
    negative:boolean,
    value: string
}

export default function NumericInputComponent({label, negative, value}:Props) {
  const {data} = useContext(DataContext)
  // const {changeData} = useUpdateObject()

  const dataValue = data[value]
  const inputRef = useRef<HTMLInputElement | any>(dataValue)

  useUpdateObject(value, parseInt(inputRef.current!.value))
  
  return (
    <>
        <div className='numericInputContainer'>
          <p>{label}:</p>
          <InputNumber min={negative?-9999:0} placeholder={`Type ${label} here`} defaultValue={dataValue} ref={inputRef}/>
        </div>
    </>
  )
}
