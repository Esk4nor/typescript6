import React, {FC} from 'react';
import {IResults} from "../../interfaces/iMovies";
import { NavLink, useNavigate} from "react-router-dom";
import css from './GenreMovice.module.css'


interface IProps {
    genre:IResults
}

const GenreMovies: FC<IProps> = ({genre}) => {
    const navigate = useNavigate();
    const {title, poster_path, id} = genre;
    return (
        <div className={css.GenreMovies}>
            <NavLink to={`/movie/${id.toString()}`}>
            <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt=""/>
            <div>{title}</div>

            </NavLink>
        </div>
    );
};

export {GenreMovies};