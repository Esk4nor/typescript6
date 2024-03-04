import React, {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';

import {genreService} from "../service/genreService";

import {IGenre, IGenreResults} from "../interfaces/IGenre";


const Context = createContext<IGenreResults>(null)
const ContextChecker = createContext<{check:boolean, setCheck:any, handleChange:any, promiseCheck: boolean, setPromiseCheck:any}>(null)

interface IProps extends PropsWithChildren{

}

const ContextProvider: FC<IProps> = ({children}) => {
    const [promiseCheck, setPromiseCheck] = useState<boolean>(null)
    const [check, setCheck] = useState<boolean>(null);
    const handleChange=()=> {
        setCheck(!check);
    }
    const [disabled, setDisabled] = useState<boolean>(null)
    const [genresResults, setGenres] = useState<IGenreResults>({genres:[]})
    useEffect(() => {
        genreService.getAll().then(({data})=> setGenres(data))

    }, []);
    return (
        <div>
            <Context.Provider value={genresResults}>
                <ContextChecker.Provider value={{check, setCheck, handleChange, setPromiseCheck, promiseCheck}}>
                {children}

                </ContextChecker.Provider>
            </Context.Provider>
        </div>
    );
};

export {ContextProvider, Context, ContextChecker};