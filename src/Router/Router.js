import { createBrowserRouter } from "react-router-dom";
import AddTask from "../component/AddTask/AddTask";
import CompletedTask from "../component/CompletedTask/CompletedTask";
import MyTask from "../component/MyTask/MyTask";
import Login from "../Main/Authentication/Login";
import Register from "../Main/Authentication/Register";
import Home from "../Main/Home/Home";
import Main from "../Main/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: "/addtask",
                element:<AddTask/>
            },
            {
                path: '/completedtask',
                element:<CompletedTask></CompletedTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: "/login",
                element:<Login/>
            }
        ]
    }
])

export default routes;