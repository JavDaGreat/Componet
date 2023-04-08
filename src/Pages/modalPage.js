import Button from "../components/Button"
import Modal from "../components/modal"
import Sidebar from '../components/SideBar';

import { useState } from "react"
function ModalPage(){
  const [showModal,setShowModal]=useState(false)

  function handleClick(){
    setShowModal(true)
  }
  const onClose= ()=>{
    setShowModal(false)
  }
  const modal= <Modal onClose={onClose} actionBar={<Button onClick={onClose}primary>I Accept</Button>}> 
  <p>Here is imporntetn!!!!!!!!!</p>
  </Modal>
  return <div>
    <Sidebar />
    <Button onClick={handleClick} primary > Open Modal</Button>
{ showModal && modal }  </div>
}
export default ModalPage