import React, {FC, useEffect, useState} from 'react';
import {IGenreResults} from "../../interfaces/IGenre";
import {genreService} from "../../service/genreService";
import {Genre} from "./Genre";

interface IProps {
}

const GenreContainer: FC<IProps> = () => {
    const [genresState, setGenres] = useState<IGenreResults>({genres:[]})
    useEffect(() => {
        genreService.getAll().then(({data})=> setGenres(data))

    }, []);
    return (
        <div>
            {genresState.genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreContainer};