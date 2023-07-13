
import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import AllBooks from '../pages/AllBooks'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import App from '../App'
import NoteFound from '../pages/NoteFound'
const routes = createBrowserRouter([
    {
        path:'/',
        element: <App></App>
    },
    {
        path:'/home',
        element: <Home/>
    },
    {
        path:'/allbooks',
        element:<AllBooks></AllBooks>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<Signup></Signup>
    },
    {
        path:'*',
        element:<NoteFound></NoteFound>
    }
])

export default routes;