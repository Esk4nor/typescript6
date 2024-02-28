import React, {FC} from 'react';

import {GenreContainer} from "../components/Genre/GenreContainer";


interface IProps {
}

const GenrePage: FC<IProps> = () => {

    return (
        <div>

            <GenreContainer/>

        </div>
    );
};

export {GenrePage};