import React, { useContext, useEffect, useState } from 'react'
import { InputNumber } from 'antd';
import { DataContext } from '../App';
import useUpdateObject from './hooks/useUpdateObject';

interface Props{
  label:string,
  values:string[]
}
export default function MinMaxInputComponent({label, values}:Props) {
  const minKey = values[0]
  const maxKey = values[1]
  const {data, error, setError} = useContext(DataContext)
  const {changeData} = useUpdateObject()
  const [minValue, setMinValue] = useState(data[minKey])
  const [maxValue, setMaxValue] = useState(data[maxKey])
  const [localError, setLocalError] = useState(false)

  //controlled input bcs it updates 'min' attribute on the maximum input field
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>, minmax:string)=>{
    if (minmax === 'min') {
      setMinValue(e);
      if (e > maxValue) {
        setLocalError(true);
        setError(true);
      } 
      else {
        setLocalError(false);
        setError(false);
      }
    } 
    else if (minmax === 'max') {
      setMaxValue(e);
      if (minValue > e) {
        setLocalError(true);
        setError(true);
      } 
      else {
        setLocalError(false);
        setError(false);
      }
    }
  }  
  changeData(minKey, minValue);
  changeData(maxKey, maxValue);
  

  return (
    <>
      <div>
        <div className='duoNumberInputContainer'>
          <p>{label}</p>
          <div className='min-max-inputs'>
            <InputNumber min={0} max={10} value={localError?0:minValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'min')}/>
            <InputNumber min={minValue} max={10} value={maxValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'max')}/>
          </div>
        </div>
      </div>
    </>
  )
}
