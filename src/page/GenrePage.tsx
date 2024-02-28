import React, {FC, useEffect, useState} from 'react';
import {genreService} from "../service/genreService";


import {Genre} from "../components/Genre/Genre";
import {IGenre, IGenreResults} from "../interfaces/IGenre";

interface IProps {
}

const GenrePage: FC<IProps> = () => {
    const [genresState, setGenres] = useState<IGenreResults>({genres:[]})
    useEffect(() => {
        genreService.getAll().then(({data})=> setGenres(data))

    }, []);
    return (
        <div>
            {genresState.genres.map(genre=><Genre key={genre.id} genre={genre} />)}
        </div>
    );
};

export {GenrePage};