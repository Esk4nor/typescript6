import React, {FC} from 'react';
import css from "../MoviesContainer/Movie/Movie.module.css";
import {useNavigate} from "react-router-dom";
import {IResults} from "../../interfaces/iMovies";

interface IProps {
    movie:IResults
}

const SearchDet: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {title,poster_path,id} = movie;
    return (
        <div className={css.Movie}>


            <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt=""
                 onClick={() => navigate(`/movie/${id.toString()}`, {state: {movie}})}/>:
            <div>{title}</div>


        </div>
    );
};

export {SearchDet};