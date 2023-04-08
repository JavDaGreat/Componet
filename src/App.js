import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AccordionPage from './Pages/AcordionPage'
 import DropeDownPage from './Pages/DropeDownPage'
 import ButtonPage from './Pages/ButtonPage';
 import ModalPage from './Pages/modalPage';
 import TablePage from './Pages/TablePage';
function App(){
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AccordionPage />
    },
    {
      path: '/dropedown',
      element: <DropeDownPage />
    },
    {
      path:'/button',
      element:<ButtonPage />
    },
    {
      path:'/modal',
      element:<ModalPage />
    },
    {
      path:'/table',
      element:<TablePage />
    },
   

  ]);
return <div>


  <RouterProvider router={router}/>
</div>
}
export default App