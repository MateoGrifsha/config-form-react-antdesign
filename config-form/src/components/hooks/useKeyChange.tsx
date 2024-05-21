import { useEffect, useState, useContext} from 'react'
import { DataContext } from '../../App';
import { ButtonContext } from '../FormComponent';
import { DataObj } from '../../App';
import { TagArray } from '../TagInputComponent';

const useKeyChange = (key:string, value:string | number | null | undefined | TagArray[] | string [], subkey:undefined | string = undefined)=>{
    const {data, setData} = useContext(DataContext)
    const saveButton:boolean = useContext(ButtonContext)
    useEffect(()=>{
        if(saveButton && subkey === undefined){
          setData((prevState:DataObj)=>({
            ...prevState,
            [key]: value
          }))
     
        }

        if(saveButton && typeof subkey !== "undefined"){
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
      }, [saveButton])
      return data
}
export default useKeyChange;