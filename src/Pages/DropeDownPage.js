import { useState } from "react"
import DropDown from "../components/DropDown"
import Sidebar from '../components/SideBar';

function DropeDownPage(){
  const [selection,setSelection] =useState(null)
  const handleSelect=(option)=>{
    setSelection(option)

  }
  const options=[
    {lable:'Red',value:'red'},
    {lable:'Green',value:'green'},
    {lable:'Yellow',value:'yellow'},
    {lable:'Blue',value:'blue'},
  ]
   return <div>
        <Sidebar />

    <DropDown options={options} selection={selection} onSelect={handleSelect}/></div>
}
export default DropeDownPage