import React, {FC} from 'react';
import {MoviesContainer} from "../components/MoviesContainer/MoviesContainer";


interface IProps {
}

const MoviePage: FC<IProps> = () => {
    return (
        <div>
           <MoviesContainer/>
        </div>
    );
};

export {MoviePage};