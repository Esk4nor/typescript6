import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MoviePage} from "./page/MoviePage";
import {GenrePage} from "./page/GenrePage";
import {Movie} from "./components/MoviesContainer/Movie/Movie";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movie'}/>
            },
            {
                path: 'movie', element: <MoviePage/>,},

            { path:'movie/:id', element:<Movie/>}
            ,
            {
                path:'genre', element:<GenrePage/>
            }

        ]
    }

]);


export {
    router
}