
import { createBrowserRouter } from 'react-router-dom';
import Home from './../Pages/Home/Home/Home';
import Main from './../Layouts/Main';
import Rooms from './../Pages/Rooms/Rooms';

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
        ]
    }
])

export default Routes;