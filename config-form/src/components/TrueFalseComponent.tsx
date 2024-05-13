import React, { useContext, useEffect, useState } from 'react'
import { Radio } from 'antd'
import { DataContext } from '../App';
import useKeyChange from './hooks/useKeyChange';

interface Props{
    label:string,
    value:string
}

export default function TrueFalseComponent({label,value}:Props) {
  const {data} = useContext(DataContext)
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
  
useKeyChange(value, checked, dataTypeCheck)


  return (
    <>
        <div>
          <p>{label}: </p>
          <Radio.Group optionType="button" buttonStyle="solid" defaultValue={checked===true?true:false}>
              <Radio.Button value={true} onClick={()=>handleClick('true')}>True</Radio.Button>
              <Radio.Button value={false} onClick={()=>handleClick('false')}>False</Radio.Button>
          </Radio.Group>
        </div>
    </>
  )
}
