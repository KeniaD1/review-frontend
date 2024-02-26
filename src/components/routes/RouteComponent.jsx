import {Routes, Route} from "react-router-dom"
import Home from '../../pages/Home.jsx'
import New from '../../pages/New.jsx'
import Edit from '../../pages/Edit.jsx'
import Error from '../../pages/Error.jsx'
import Makeup from '../../pages/Makeup.jsx'
import Show from '../../pages/Show.jsx'
import About from "../../pages/About.jsx"

import { Navigate } from "react-router-dom"

export default function RouteComponent () {




return (
  <Routes>
    
    <Route path='/' element= {< Home />} />
    
    <Route path="/makeup"  element ={<Makeup />} />

    <Route path="makeup/new" element = {<New />} />

    <Route path="/about" element = {<About />} />

    <Route path= "/makeup/:id" element = {<Show />} />

    <Route path ="/makeup/:id/edit" element = {<Edit />} />

    <Route path="/not-found" element = { <Error />} />

    <Route path="*" element= {<Navigate to = '/not-found' />} />

  </Routes>
)

}