import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {MoviePage} from "./page/MoviePage";
import {GenrePage} from "./page/GenrePage";
import {Movie} from "./components";

import {GenreContainer} from "./components/Genre/GenreContainer";
import {Search} from "./components/search/Search";
import {SearchPage} from "./page/searchPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movie'}/>
            },
            {
                path: 'movie', element: <MoviePage/>
            },

            { path:'movie/:id', element:<Movie/>},
            {path:'search', element:<SearchPage/>, children:[{path:'search/:with_keywords', element:<Search/>}]},
            {
                path:'genre', element:<GenrePage/>, children:[{
                    path:':width_genre', element:<GenreContainer/>
                }]


            }

        ]
    }

]);


export {
    router
}