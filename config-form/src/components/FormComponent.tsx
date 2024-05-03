import React, {useContext} from 'react'
import { Form } from 'antd';
import TrueFalseGroup from './TrueFalseGroup';
import NumericInputGroup from './NumericInputGroup';
import MinMaxInputGroup from './MinMaxInputGroup';
import TagInputGroup from './TagInputGroup';
import CollapseEmailComponent from './CollapseEmailComponent';
import { DataContext } from '../App';

export default function FormComponent() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const data = useContext(DataContext);
  
  return (
    
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
    </Form>
  )
}
