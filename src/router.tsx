import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MoviePage} from "./page/MoviePage";
import {GenrePage} from "./page/GenrePage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movie'}/>
            },
            {
                path:'movie', element:<MoviePage/>
            },
            {
                path:'genre', element:<GenrePage/>
            }

        ]
    }

]);


export {
    router
}