import React, {FC, useEffect, useState} from 'react';
import {IMovies} from "../../interfaces/iMovies";
import {movieService} from "../../service/movieService";
import {Movies} from "./Movies/Movies";
import css from './Movies/Movies.module.css'
import {useSearchParams} from "react-router-dom";

interface IProps {
}

const MoviesContainer: FC<IProps> = () => {
    const [query, setQuery] = useSearchParams({pages: '1'});
    const pages = query.get('pages')
    const [movies, setMovies] = useState<IMovies>({page: null, results:[], total_results:null,total_pages:null})
    useEffect(() => {
        movieService.getAll(pages).then(({data})=>setMovies(():IMovies=>{
            const {page, results,total_pages,total_results} = data;
            return {page, results, total_pages, total_results}
        }))
    }, [pages]);


    const nextPage = ()=>{
        setQuery(prev => {
            console.log(prev)
            prev.set('pages', (+prev.get('pages') + 1 ).toString())

            return prev

        })
    }
    const prevPage = ()=>{
        setQuery(prev => {
            console.log(prev)
            prev.set('pages', (+prev.get('pages') - 1 ).toString())

            return prev

        })
    }
    console.log(query)

    return (
        <div className={css.Movies}>
            {movies.results.map(movie=><Movies key={movie.id} movie={movie}/>)}
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {MoviesContainer}