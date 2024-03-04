import React, {FC, useContext, useEffect, useState} from 'react';
import {FieldValue, SubmitHandler, useForm} from "react-hook-form";
import {searchService} from "../../service/searchService";
import { Outlet, useSearchParams} from "react-router-dom";
import {IMovies, } from "../../interfaces/iMovies";
import {Movies} from "../MoviesContainer/Movies/Movies";
import {ContextChecker} from "../../hoc/ContextProvider";
import {SearchDet} from "./SearchDet";



interface IProps {
}

const Search: FC<IProps> = () => {
    const [query, setQuery] = useSearchParams('');
    const {setPromiseCheck} = useContext(ContextChecker)
    const keyword = query.get('query')
    const [movies, setMovies] = useState<IMovies>({page: null, results:[], total_results:null,total_pages:null})
    useEffect(() => {
        searchService.findFilm(keyword).then(({data})=>setMovies(data))

    }, [query]);
    const {handleSubmit, reset,register} = useForm();
    const save:SubmitHandler<FieldValue<any>> = (keywordS) =>{
        setPromiseCheck(true)

        setQuery(keywordS)
        reset()
        console.log(movies)

    }


    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'query'} {...register('query')}/>
            </form>
            {movies.total_pages&& movies.results.map(movie=><SearchDet key={movie.id} movie={movie} />)}
            <Outlet/>
        </div>
    );
};

export {Search};