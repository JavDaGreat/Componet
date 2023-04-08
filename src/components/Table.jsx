import { Fragment } from "react";

function Table({data ,config}){

  const rendredHeaders= config.map((column)=>{
    if(column.header){
      return  <Fragment key={column.label}>{column.header()}</Fragment>

    } else{
    return <th key={column.label}>{column.label}</th>}
  })
  const rederedRow= data.map((rowData)=>{
    const rendredCells=config.map((column)=>{
      return <td className="p-2" key={column.label}>{column.rendred(rowData)}</td>
    })
    return <tr className="border-b" key={rowData.name}>
    {rendredCells}
    </tr>
  })
  return <table className="table-auto border-spacing-2">
    <thead>
      <tr className="border-b-2">
      {rendredHeaders}
      </tr>
    </thead>
    <tbody>{rederedRow}</tbody>
   
  </table>
}
export default Table