import React, {FC, useEffect, useState} from 'react';
import {useAppLocation} from "../../../hooks/useAppLocation";
import {IResults} from "../../../interfaces/iMovies";
import {movieService} from "../../../service/movieService";
import {IMovie} from "../../../interfaces/IMovie";
import {MovieDetails} from "../MoviesDetails/MovieDetails";

interface IProps {
}

const Movie: FC<IProps> = () => {
    const [movieDetails, setMovieDetails] = useState<IMovie>(null);
    const {state} = useAppLocation<{movie:IResults}>();
    useEffect(() => {
        movieService.getById(state.movie.id).then(({data})=>setMovieDetails(data))

    }, []);


    return (
        <div>
            {movieDetails&&<MovieDetails key={movieDetails.id} movieDetails={movieDetails}/>}
        </div>
    );
};

export {Movie};