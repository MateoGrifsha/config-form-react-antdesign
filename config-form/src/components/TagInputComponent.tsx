import React, { useContext, useEffect, useState } from 'react'
import { Tag } from 'antd';
import { DataContext } from '../App';
import {ButtonContext} from '../components/FormComponent'
import { DataObj, Types } from '../App';
const { CheckableTag } = Tag;


interface Props{
    inputs: string[],
    label: string,
    value: string
}
export default function TagInputComponent({inputs, label, value}:Props) {
    const data:any = useContext(DataContext)
    const saveButton:boolean = useContext(ButtonContext)
    const initialTags:string[] =[]
    const valueKey = data[0][value]
    if(valueKey != null){
        for(let i = 0;i<valueKey.length;i++){
            initialTags.push(data[0][value][i]['text'])
        }
    }
    const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        setSelectedTags(nextSelectedTags);
    };
    const arrayOfObjects = selectedTags.map(tag => ({
        'text': tag,
        'name': tag,
        'value': tag
      }));
      
    useEffect(()=>{
        if(saveButton){
            data[0][value] = arrayOfObjects
        }
    },[saveButton])
    
  return (
    <div>
        {label}
        {inputs.map((tag:string)=>(
            <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => handleChange(tag, checked)}
                >
                {tag}
            </CheckableTag>
        ))}
    </div>
  )
}
