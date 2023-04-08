import { useState,useEffect,useRef } from "react"
import { GoChevronDown } from 'react-icons/go';
import Panel from "./Panel";

function DropDown ({options,selection,onSelect}){
  const [isOpen,setIsOpen]=useState(false)
  const divEl=useRef()
  useEffect(()=>{
const handler=(event)=>{
  if(!divEl.current){
    return
  }
  if(!divEl.current.contains(event.target)){
    setIsOpen(false)
  }
}
document.addEventListener('click',handler,true)
return ()=>{
  document.removeEventListener('click',handler)
}
  },[])

  const handleOptionClick=(option)=>{
    setIsOpen(false)
    onSelect(option)
    }
    
const redredOption= options.map((option)=>{
  return <div className="hover:bg-sky-100 rounded cureser-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}> {option.lable}</div>
 
})
const handleClick=()=>{
setIsOpen(!isOpen)
}


return (
  <div ref={divEl} className="w-48 relative">
    <Panel
      className="flex justify-between items-center cursor-pointer "
      onClick={handleClick}
    >
      {selection?.lable || 'Select...'}
      <GoChevronDown className="text-lg" />
    </Panel>
    {isOpen && (
      <Panel className="absolute top-full ">
        {redredOption}
      </Panel>
    )}
  </div>
);
}
export default DropDown