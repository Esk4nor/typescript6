import React, {FC} from 'react';
import {IResults} from "../../../interfaces/iMovies";
import css from '../Movie/Movie.module.css'
import {useNavigate} from "react-router-dom";


interface IProps {
    movie:IResults
}

const Movies: FC<IProps> = ({movie}) => {
    const navigate = useNavigate();
    const {title,poster_path,id} = movie;
    return (
        <div className={css.Movie}>


                <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt="" onClick={()=>navigate(id.toString(), {state:{movie}})}/>
                <div>{title}</div>



        </div>
    );
};

export {Movies};