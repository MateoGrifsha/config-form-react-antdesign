import React, { useContext, useEffect, useState } from 'react'
import { InputNumber } from 'antd';
import { DataContext } from '../App';
import useKeyChange from './hooks/useKeyChange';

interface Props{
  label:string,
  values:string[]
}
export default function MinMaxInputComponent({label, values}:Props) {
  const minKey = values[0]
  const maxKey = values[1]
  const {data, setError} = useContext(DataContext)
  const [minValue, setMinValue] = useState(data[minKey])
  const [maxValue, setMaxValue] = useState(data[maxKey])

  //controlled input bcs it updates 'min' attribute on the maximum input field
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>, minmax:string)=>{
    if(minmax=='min'){
      setMinValue(e)
    }
    else if (minmax=='max'){
      setMaxValue(e)
    }


  }
  
  useEffect(()=>{
    if(minValue>maxValue){
      setError(true)
    }
    else{
      setError(false)
    }
  },[minValue, maxValue])
  
  useKeyChange(minKey, minValue)
  useKeyChange(maxKey, maxValue)

  return (
    <>
      <div>
        <div className='duoNumberInputContainer'>
          <p>{label}</p>
          <div className='min-max-inputs'>
            <InputNumber min={0} max={10} value={minValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'min')}/>
            <InputNumber min={minValue} max={10} value={maxValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'max')}/>
          </div>
        </div>
      </div>
    </>
  )
}
