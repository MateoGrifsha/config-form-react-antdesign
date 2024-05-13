import React, {createContext,useContext, useEffect, useState} from 'react'
import { Form,Button } from 'antd';
import TrueFalseGroup from './TrueFalseGroup';
import NumericInputGroup from './NumericInputGroup';
import MinMaxInputGroup from './MinMaxInputGroup';
import TagInputGroup from './TagInputGroup';
import CollapseEmailComponent from './CollapseEmailComponent';
import { DataContext } from '../App';


export const ButtonContext = createContext<boolean>(false);
export default function FormComponent() {
  const [save, setSave] = useState<boolean>(false)
  const {data, setData} = useContext(DataContext)!
  const handleButtonClick = () =>{
    setSave(true)
    setTimeout(()=>{setSave(false)},1000); 
  }
  useEffect(()=>{
    console.log(data)
  },[data])
  
  return (
  <ButtonContext.Provider value={save}>
      <Form
        className='form-container'
      >
        <Form.Item>
            <TrueFalseGroup/>
        </Form.Item>
        <hr />
        <Form.Item>
            <NumericInputGroup/>
        </Form.Item>
        <hr />
        <Form.Item>
            <MinMaxInputGroup/>
        </Form.Item>
        <hr />
        <Form.Item>
            <TagInputGroup />
        </Form.Item>
        <hr />
        <Form.Item>
            <CollapseEmailComponent />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleButtonClick} loading={save}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ButtonContext.Provider>
  )
}
