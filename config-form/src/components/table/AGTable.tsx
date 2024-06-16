import React, { useState, useContext, useEffect, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { DataContext } from '../../App'

interface ArrayElement{
  text: string,
  name: string,
  value: string 
}
export default function AGTable({allKeys, emailKeys}:any){
    const {data} = useContext(DataContext)
    const [prevStates, setPrevStates] = useState(Array)
    const isInitialRender = useRef(true);
    useEffect(()=>{
      if (isInitialRender.current) {
        isInitialRender.current = false;
      } else {
        setPrevStates((prev) => [...prev, data]);
      }
    }, [data])
    
    const formatter = (p:any)=>{
      if(emailKeys.includes(p.colDef.field)){
        const emailPlaceholder = p.data['emailConfigurations'][0]

        if(emailPlaceholder[p.colDef.field] === null){
          emailPlaceholder[p.colDef.field] = false
          return false
        }

        if(Array.isArray(emailPlaceholder[p.colDef.field])){
          let values = ''
          emailPlaceholder[p.colDef.field].map((x:string) => (values += x + ',  '))
          return values.length>0 ? values : 'None'
        }

        return emailPlaceholder[p.colDef.field]
      }

      if(Array.isArray(p.value)){
        let values = ''
        p.value.map((x:ArrayElement) => (values += x.text + ',  '))
        return values.length>0 ? values : 'None'
      }

      if(p.value === null){
        return false
      }
      
    }
    const colDefs = allKeys.map((key:string) => ({ field: key, cellDataType:'text', valueFormatter: formatter }));

  return (
    <>
      {/* {rowData.length>=1 &&  */}
        <div className={"ag-theme-quartz-dark ag-table"}>
          <AgGridReact rowData={prevStates} columnDefs={colDefs} />
        </div>
      {/* } */}
    </>
  );
}