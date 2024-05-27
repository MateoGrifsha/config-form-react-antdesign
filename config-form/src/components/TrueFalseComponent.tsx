import React, { useContext, useEffect, useRef, useState } from 'react'
import { Radio } from 'antd'
import { DataContext } from '../App';
import useUpdateObject from './hooks/useUpdateObject';

interface Props{
    label:string,
    value:string
}

export default function TrueFalseComponent({label,value}:Props) {
  const {data} = useContext(DataContext)
  const {changeData} = useUpdateObject()
  const dataTypeCheck = data['emailConfigurations'][0][value]
  const [checked,setChecked] = useState(dataTypeCheck!=undefined?dataTypeCheck:data[value])

  const handleClick = (trueOrFalse:string) => {
    if(trueOrFalse === 'true'){
      setChecked(true)
    }
    else if(trueOrFalse === 'false'){
      setChecked(false)
    }
  }
      
  changeData(value, checked, dataTypeCheck);
  
  return (
    <>
        <div>
          <span>{label}: </span>
          <Radio.Group optionType="button" buttonStyle="solid" defaultValue={checked===true?true:false}>
              <Radio.Button value={true} onClick={()=>handleClick('true')} className='true-button'>YES</Radio.Button>
              <Radio.Button value={false} onClick={()=>handleClick('false')} className='false-button'>NO</Radio.Button>
          </Radio.Group>
        </div>
    </>
  )
}
