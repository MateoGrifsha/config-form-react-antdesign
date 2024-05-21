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
  const {data, error} = useContext(DataContext)!
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
      
       <div className='section1-wrapper'>
          <div>       
            <Form.Item>
              <TrueFalseGroup/>
            </Form.Item>
          </div>
          <div>
            <Form.Item>
                <NumericInputGroup/>
            </Form.Item>
          </div>
       </div>

       <div className="section2-wrapper">
      <Form.Item>
            <TagInputGroup />
        </Form.Item>
        <Form.Item>
            <MinMaxInputGroup/>
        </Form.Item>
      </div>

        <Form.Item>
            <CollapseEmailComponent />
        </Form.Item>
        
        <Form.Item>
          <Button className='submit-button' type="primary" htmlType="submit" onClick={handleButtonClick} loading={save} disabled={error}> 
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ButtonContext.Provider>
  )
}
