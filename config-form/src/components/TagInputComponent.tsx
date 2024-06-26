import React, { useContext, useEffect, useState } from 'react'
import { Tag } from 'antd';
import { DataContext } from '../App';
import useKeyChange from './hooks/useKeyChange';
const { CheckableTag } = Tag;

interface Props{
    inputs: string[],
    label: string,
    value: string
}
export interface TagArray{
    text: string,
    name: string,
    value: string
}
export default function TagInputComponent({inputs, label, value}:Props) {
    const {data} = useContext(DataContext)
    const initialTags:string[] =[]
    const valueKey = data[value]
    if(valueKey != null){
        for(let i = 0;i<valueKey.length;i++){
            initialTags.push(data[value][i]['text'])
        }
    }
    const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        setSelectedTags(nextSelectedTags);
    };
    
    const tagArray = selectedTags.map(tag => ({
        'text': tag,
        'name': tag,
        'value': tag
      }));
      
    useKeyChange(value, tagArray)


    
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
