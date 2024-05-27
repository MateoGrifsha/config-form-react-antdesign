import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../App';
import { DataObj } from '../../App';
import { TagArray } from '../TagInputComponent';
import { ButtonContext } from '../FormComponent';

const useUpdateObject = ()=>{
    const {setData} = useContext(DataContext)
    const {save, setSave} = useContext(ButtonContext)
    
    const changeData = (key:string, value:string | number | null | undefined | TagArray[] | string [], subkey:undefined | string = undefined) => {
        if(save){
          if(subkey === undefined){
            setData((prevState:DataObj)=>({
              ...prevState,
              [key]: value
            }))
       
          }
    
          if(typeof subkey !== "undefined"){
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
      }

      return {changeData}
      }

export default useUpdateObject;