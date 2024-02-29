import React, {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';

import {genreService} from "../service/genreService";

import {IGenre, IGenreResults} from "../interfaces/IGenre";


const Context = createContext<IGenreResults>(null)

interface IProps extends PropsWithChildren{

}

const ContextProvider: FC<IProps> = ({children}) => {
    const [genresResults, setGenres] = useState<IGenreResults>({genres:[]})
    useEffect(() => {
        genreService.getAll().then(({data})=> setGenres(data))

    }, []);
    return (
        <div>
            <Context.Provider value={genresResults}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {ContextProvider, Context};