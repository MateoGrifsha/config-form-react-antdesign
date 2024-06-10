import React, {createContext,useContext, useEffect, useState} from 'react'
import { Form,Button } from 'antd';
import TrueFalseGroup from './TrueFalseGroup';
import NumericInputGroup from './NumericInputGroup';
import MinMaxInputGroup from './MinMaxInputGroup';
import TagInputGroup from './TagInputGroup';
import CollapseEmailComponent from './CollapseEmailComponent';
import { DataContext } from '../App';
import Table from './table/Table';


export const ButtonContext = createContext<any>(false);
export default function FormComponent() {
  const [save, setSave] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const {data, error} = useContext(DataContext)! 

  const handleButtonClick = (e:any) =>{
    e.preventDefault();
    setSave(true);

    setLoading(true)
    setTimeout(()=>{setLoading(false)}, 1000); //disable the submit button for 1 second to prevent spamming
  }

  useEffect(()=>{
    console.log(data)
  },[data])
  
  return (
  <ButtonContext.Provider value={{save, setSave}}>
      <Form className='form-container'>
      
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
          <Button className='submit-button' type="primary" htmlType="submit" onClick={handleButtonClick} loading={loading} disabled={error}> 
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table />
    </ButtonContext.Provider>
  )
}
