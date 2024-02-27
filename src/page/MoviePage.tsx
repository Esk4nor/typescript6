import React, {FC} from 'react';
import {MovieContainer} from "../components";

interface IProps {
}

const MoviePage: FC<IProps> = () => {
    return (
        <div>
            <MovieContainer/>
        </div>
    );
};

export {MoviePage};