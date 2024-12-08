
import { createBrowserRouter } from 'react-router-dom';
import Home from './../Pages/Home/Home/Home';
import Main from './../Layouts/Main';
import Rooms from './../Pages/Rooms/Rooms';
import AddRooms from '../Pages/AddRooms/AddRooms';

const Routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/rooms',
                element:<Rooms></Rooms>
            },
            {
                path:'/add-rooms',
                element:<AddRooms></AddRooms>
            }
        ]
    }
])

export default Routes;