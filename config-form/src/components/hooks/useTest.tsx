import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../App';
import { DataObj } from '../../App';
import { TagArray } from '../TagInputComponent';
import { ButtonContext } from '../FormComponent';

const useTest = (key:string, value:string | boolean | number | null | undefined | TagArray[] | string [], subkey:undefined | string = undefined)=>{
    const {setData} = useContext(DataContext)
    const {save, setSave} = useContext(ButtonContext)
    
    useEffect(()=>{
    if(save){
      if(subkey === undefined){
        setData((prevState:DataObj)=>({
          ...prevState,
          [key]: value
          }))
          }
          
      else if(typeof subkey !== "undefined"){
        setData((prevState:DataObj)=>({
          ...prevState,
        emailConfigurations:{
          ...prevState.emailConfigurations,
            [0]:{
              ...prevState.emailConfigurations?.[0],
                [key]: value
            }
          }
        }))
      }
      }
      setSave(false)
     
    }, [save])
}

export default useTest;