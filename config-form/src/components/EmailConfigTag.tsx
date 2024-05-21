import React, { useEffect, useRef, useState, useContext } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Input, Tag, Tooltip } from 'antd';
import { DataContext } from '../App';
import {ButtonContext} from '../components/FormComponent'
import useKeyChange from './hooks/useKeyChange';

interface Props{
  value:string
}
export default function EmailConfigTag({value}:Props) {
    const {data} = useContext(DataContext)

    const saveButton:boolean = useContext(ButtonContext)
    const [tags, setTags] = useState<string[]>(data['emailConfigurations'][0][value]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);

    useEffect(()=>{
      if(saveButton){
        data['emailConfigurations'][0][value] = tags
      }
    },[saveButton])

    useEffect(() => {
        if (inputVisible) {
          inputRef.current?.focus();
        }
      }, [inputVisible]);
    
      useEffect(() => {
        editInputRef.current?.focus();
      }, [inputValue]);
    
      const handleClose = (removedTag: string) => {
        const newTags = tags.filter(tag => tag !== removedTag);
        setTags(newTags);
      };
    
      const showInput = () => {
        setInputVisible(true);
      };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
    
      const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
          setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
      };
    
      const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(e.target.value);
      };
    
      const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
      };
    
      useKeyChange(value, tags, 'emailConfigurations')
  return (
    <>
        {tags.map((tag, index) => {
                    if (editInputIndex === index) {
                    return (
                        <Input
                        ref={editInputRef}
                        key={tag}
                        size="small"
                        className="tag-input"
                        value={editInputValue}
                        onChange={handleEditInputChange}
                        onBlur={handleEditInputConfirm}
                        onPressEnter={handleEditInputConfirm}
                        />
                    );
                    }

                    const isLongTag = tag.length > 20;

                    const tagElem = (
                    <Tag
                        className="edit-tag"
                        key={tag}
                        closable={index !== -1}
                        onClose={() => handleClose(tag)}
                    >
                        <span
                        onDoubleClick={e => {
                            if (index !== 0) {
                            setEditInputIndex(index);
                            setEditInputValue(tag);
                            e.preventDefault();
                            }
                        }}
                        >
                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                    </Tag>
                    );
                    return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                    ) : (
                    tagElem
                    );
                })}
                {inputVisible && (
                    <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    className="tag-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag className="site-tag-plus" onClick={showInput}>
                    <PlusOutlined /> {`New ${value}`}
                    </Tag>
                )}
            
    </>
  )
}
