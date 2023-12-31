import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AllBooks from '../pages/AllBooks';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import App from '../App';
import NoteFound from '../pages/NoteFound';
// import BookDetails from '../pages/BookDetails';
import AddNewBook from '../pages/AddNewBook';
import BookDetails from '../pages/BookDetails';
import PrivetRoute from './PrivetRoute';
 
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/allbooks',
        element: <AllBooks></AllBooks>,
      },
     {
        path: '/all-book/:id',
        element: <PrivetRoute><BookDetails /></PrivetRoute>,
      },
      {
        path: '/AddNewBook/',
        element: <AddNewBook></AddNewBook>
      },
     
    ],
  },

  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element: <Signup></Signup>,
  },
  {
    path: '*',
    element: <NoteFound></NoteFound>,
  },
]);

export default routes;
