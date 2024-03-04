import React, {FC, } from 'react';


import {IMovie} from "../../../interfaces/IMovie";
import {NavLink} from "react-router-dom";
import css from './MoviesDetails.module.css'

interface IProps {
    movieDetails:IMovie
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {

    const {genres, poster_path, runtime, release_date, overview, original_title} = movieDetails;

    console.log(genres)

    return (
        <div className={css.MoviesDetails}>
            <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt=""/>
            <div>
                {genres.map(genre =><NavLink to={`/genre?with_genres=${genre.id}`}><div>{genre.name}</div></NavLink>)}

                <div>{runtime}</div>
                <div>{release_date}</div>
                <div>{original_title}</div>
                <div>Overview: {overview}</div>

            </div>

        </div>
    );
};


export {MovieDetails};