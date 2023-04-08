import Accordion from "../components/Accordion"
import Sidebar from '../components/SideBar';

function AccordionPage(){
  const items=[
    {   id:'1',
      label:'javad',
      content:' are you mad on me ?'
    },
    {
      id:'2',
      label:'css',
      content:' lets seee how much of css u know about!'
    },  {
      id:'3',
      label:'jaavscript',
      content:'javascript is the king !'
    }
  
  ]
  
  return <div>
    <Sidebar />
    
    
    <Accordion items ={items} /></div>
}
export default AccordionPage