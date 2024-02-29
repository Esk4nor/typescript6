import React, {FC, useContext, useEffect, useState} from 'react';


import {genreService} from "../../service/genreService";
import {Context} from "../../hoc/ContextProvider";
import {useSearchParams} from "react-router-dom";
import {IMovies} from "../../interfaces/iMovies";
import {GenreMovies} from "./GenreMovies";
import css from './GenreContainer.module.css'

interface IProps {
}

const GenreContainer: FC<IProps> = () => {

    const {genres} = useContext(Context)
    const [queryGenre, setQueryGenre] = useSearchParams({with_genres:'0'});
    const withGenre= queryGenre.get('with_genres')
    const [genreMovie, setGenreMovie] = useState<IMovies>({page: null, results:[], total_results:null,total_pages:null});




    useEffect(() => {

        genreService.getByGenre(withGenre).then(({data})=>setGenreMovie(data))


    }, [queryGenre]);

    return (
        <div>
            <div className={css.genreBox}>
            {genres.map(genre => <div key={genre.id} onClick={() => setQueryGenre({with_genres: genre.id.toString()})}>{genre.name} </div>)}

            </div>
            <div className={css.GenreContainer}>
            {genreMovie.results.map(genre => <GenreMovies key={genre.id} genre={genre}/>)}

            </div>

                </div>
                );
            };

export {GenreContainer};