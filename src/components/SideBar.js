/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom"



function Sidebar(){
  const Navigate =useNavigate()




  return <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
   <a className="cursor-pointer font-bold border-l-4 border-blue-500 pl-2" onClick={()=>{Navigate('/dropedown')}}> DropeDown</a>
    <a  className="cursor-pointer font-bold border-l-4 border-blue-500 pl-2" onClick={()=>{Navigate('/')}}> Accordion</a>
    <a  className="cursor-pointer font-bold border-l-4 border-blue-500 pl-2" onClick={()=>{Navigate('/button')}}> Buttons</a>
  <a className="cursor-pointer font-bold border-l-4 border-blue-500 pl-2" onClick={()=>{Navigate('/modal')}}> Modal</a>
  <a className="cursor-pointer font-bold border-l-4 border-blue-500 pl-2 mb-2" onClick={()=>{Navigate('/table')}}> Table</a>
 
  </div>
}
export default Sidebar