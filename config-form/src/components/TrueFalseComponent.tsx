import React, { useContext, useState } from 'react'
import { Radio } from 'antd'
import { DataContext } from '../App';
import {ButtonContext} from '../components/FormComponent'
import { DataObj } from '../App';

interface Props{
    label:string,
    value:string
}

export default function TrueFalseComponent({label,value}:Props) {
  const data:any = useContext(DataContext)
  const saveButton:boolean = useContext(ButtonContext)
  const dataTypeCheck = data[0]?.['emailConfigurations'][0]?.[value]
  const [checked,setChecked] = useState(dataTypeCheck!=undefined?dataTypeCheck:data[0]?.[value])
  const handleClick = (trueOrFalse:string) => {
    if(trueOrFalse === 'true'){
      setChecked(true)
    }
    else if(trueOrFalse === 'false'){
      setChecked(false)
    }
  }
  if(saveButton && typeof dataTypeCheck === 'undefined'){
    data[0][value]=checked
  }
  if(saveButton && typeof dataTypeCheck !== 'undefined'){
    data[0]['emailConfigurations'][0][value] = checked
  }

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
