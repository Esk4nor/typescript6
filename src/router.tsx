import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MoviePage} from "./page/MoviePage";
import {GenrePage} from "./page/GenrePage";
import {OneMovie} from "./components/MoviesContainer/OneMovie";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movie'}/>
            },
            {
                path: 'movie', element: <MoviePage/>,},

            { path:'movie/:id', element:<OneMovie/>}
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