import React, { useState, useContext, useRef, useEffect } from 'react'
import { InputNumber } from 'antd';
import { DataContext } from '../App';
import {ButtonContext} from '../components/FormComponent'
interface Props{
    label:string,
    negative:boolean,
    value: string
}

export default function NumericInputComponent({label, negative, value}:Props) {
  const saveButton:boolean = useContext(ButtonContext)
  const data:any = useContext(DataContext)
  const [dataValue, setDataValue] = useState<number>(data[0][value])
  const inputRef:any = useRef()

useEffect (()=>{
  if(saveButton){
    setDataValue(parseInt(inputRef.current.value))
  }
}, [saveButton])
data[0][value]= dataValue
  return (
    <>
        <div className='numericInputContainer'>
          <p>{label}:</p>
          <InputNumber min={negative?-9999:0} placeholder={`Type ${label} here`} defaultValue={dataValue} ref={inputRef}/>
        </div>
    </>
  )
}
