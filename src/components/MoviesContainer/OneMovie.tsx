import React, {FC, useEffect, useState} from 'react';
import {useAppLocation} from "../../hooks/useAppLocation";
import {IResults} from "../../interfaces/iMovies";
import {movieService} from "../../service/movieService";
import {IMovie} from "../../interfaces/IMovie";

interface IProps {
}

const OneMovie: FC<IProps> = () => {
    const [movie, setMovie] = useState<IMovie>(null);
    const {state} = useAppLocation<{movie:IResults}>();
    useEffect(() => {
        movieService.getById(state.movie.id).then(({data})=>setMovie(data))

    }, []);


    return (
        <div>

        </div>
    );
};

export {OneMovie};