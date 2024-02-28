import React, {FC, useContext} from 'react';
import {IGenre} from "../../interfaces/IGenre";
import {Context} from "../../hoc/ContextProvider";

interface IProps {
    genre:IGenre
}

const Genre: FC<IProps> = ({genre}) => {

    const {id, name} = genre;
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export {Genre};