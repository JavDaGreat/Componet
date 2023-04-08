import { useState } from "react"
import { GoChevronLeft,GoChevronDown } from "react-icons/go";


function Accordion({items}){
  const [expendedIndex,setExpendedIndex]=useState(-1)
  const renderedItems=items.map((item,index)=>{
  const isExpended= index === expendedIndex
  
 

    const icon= <span className="text-3xl">
      {isExpended ? <GoChevronDown />:<GoChevronLeft />}
    </span>
    return <div key={item.id}>
      <div className="flex justify-between p-3 bg-grey-200 border-b items-center curser-pointer" onClick={()=>{if(expendedIndex ===index){setExpendedIndex(-1)}else{setExpendedIndex(index)} }}>
         
        {item.label} {icon}</div>
        
     {isExpended && <div className="border-b p-5">{item.content}</div>}
    </div>

  })
  
  return <div className="border-x border-t rounded">{renderedItems}</div>
}
export default Accordion 