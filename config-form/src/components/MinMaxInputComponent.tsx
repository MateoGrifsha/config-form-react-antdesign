import React, { useContext, useEffect, useState } from 'react'
import { InputNumber } from 'antd';
import { DataContext } from '../App';
import {ButtonContext} from '../components/FormComponent'

interface Props{
  label:string,
  values:string[]
}
export default function MinMaxInputComponent({label, values}:Props) {
  const saveButton:any = useContext(ButtonContext)
  const minKey = values[0]
  const maxKey = values[1]
  const data:any = useContext(DataContext)
  const [minValue, setMinValue] = useState(data[0][minKey])
  const [maxValue, setMaxValue] = useState(data[0][maxKey])

  //controlled input bcs it updates 'min' attribute on the maximum input field
  const handleChange = (e:any, minmax:string)=>{
    if(minmax=='min'){
      setMinValue(e)
    }
    else if (minmax=='max'){
      setMaxValue(e)
    }
  }

  if(saveButton){
    data[0][minKey] = minValue
    data[0][maxKey] = maxValue
  }

  return (
    <div className='duoNumberInputContainer'>
      <p>{label}</p>
      <div>
        <InputNumber min={0} max={10} value={minValue} onChange={(e:any) => handleChange(e, 'min')}/>
        <InputNumber min={minValue} max={10} value={maxValue} onChange={(e:any) => handleChange(e, 'max')}/>
      </div>
      {minValue > maxValue && <div className='errorBox'>Minimum cannot be bigger than maximum.</div>}
    </div>
  )
}
