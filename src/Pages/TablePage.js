import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
import Sidebar from '../components/SideBar.js'
function TablePage(){
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];
  const config=[
    {label:'Fruit',
    rendred:(fruit)=>fruit.name,
    sortValue:(fruit)=>fruit.name

  
  },
    {label:'Color',
    rendred:(fruit)=><div className={`p-3 m-2 ${fruit.color}`}></div>,
  },
    {label:'Score',
    rendred:(fruit)=>fruit.score,
    sortValue:(fruit)=>fruit.score


  },{
    label:'Score Squire',
    rendred:(fruit)=>fruit.score **2,
    sortValue:(fruit)=>fruit.score **2
  }
  ]
  return <div>
    <Sidebar />
    
    <SortableTable data={data} config={config} /></div>
}
export default TablePage