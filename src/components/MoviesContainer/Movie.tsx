import React, {FC} from 'react';
import {IResults} from "../../interfaces/iMovie";
import css from './Movie.module.css'


interface IProps {
    movie:IResults
}

const Movie: FC<IProps> = ({movie}) => {
    const {title,poster_path} = movie;
    return (
        <div className={css.Movie}>


                <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt=""/>
                <div>{title}</div>



        </div>
    );
};

export {Movie};