import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import EmailConfiguration from './EmailConfiguration';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;
export default function CollapseEmailComponent() {
  return (
    <div >
        <Collapse
            bordered={false}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
            <Panel header="Email Configurations" key="1" className="site-collapse-custom-panel">
                <EmailConfiguration />
            </Panel>
        </Collapse>
    </div>
  )
}
