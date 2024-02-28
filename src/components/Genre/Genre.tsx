import React, {FC, useEffect, useState} from 'react';
import {IGenre} from "../../interfaces/IGenre";

import { useSearchParams} from "react-router-dom";
import {IMovies} from "../../interfaces/iMovies";

import {genreService} from "../../service/genreService";
import {GenreMovies} from "./GenreMovies";


interface IProps {
    genre:IGenre
}

const Genre: FC<IProps> = ({genre}) => {

    const {id, name} = genre;

    const [queryGenre, setQueryGenre] = useSearchParams({with_genres:'0'});
    const withGenre= queryGenre.get('with_genres')
    const [genreMovie, setGenreMovie] = useState<IMovies>({page: null, results:[], total_results:null,total_pages:null});




       useEffect(() => {

           genreService.getByGenre(withGenre).then(({data})=>setGenreMovie(data))


       }, [queryGenre]);


    return (
        <div>

            <div onClick={()=>setQueryGenre({with_genres: id.toString()})}>{name}</div>
            {genreMovie.results.map(genre=><GenreMovies key={genre.id} genre={genre}/>)}

        </div>
    );
};

export {Genre};