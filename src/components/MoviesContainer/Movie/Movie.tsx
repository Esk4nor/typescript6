import React, {FC, useEffect, useState} from 'react';
import {useAppLocation} from "../../../hooks/useAppLocation";
import {IResults} from "../../../interfaces/iMovies";
import {movieService} from "../../../service/movieService";
import {IMovie} from "../../../interfaces/IMovie";
import {MovieDetails} from "../MoviesDetails/MovieDetails";
import {useParams} from "react-router-dom";

interface IProps {
}

const Movie: FC<IProps> = () => {
    const [movieDetails, setMovieDetails] = useState<IMovie>(null);
    const {id} = useParams();
    useEffect(() => {
        movieService.getById(+id).then(({data})=>setMovieDetails(data))
        console.log(id)

    }, []);


    return (
        <div>
            {movieDetails&&<MovieDetails key={movieDetails.id} movieDetails={movieDetails}/>}
        </div>
    );
};

export {Movie};