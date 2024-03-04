import React, {FC, useEffect} from 'react';

import {usePageQuery} from "../../hooks/usePageQuery";
import css from './GenreContainer.module.css'

interface IProps {
}

const ButtonActive: FC<IProps> = () => {
    const {prevPage, nextPage, pages, setDisabled, disabled} = usePageQuery();
    useEffect(() => {
        if (pages==='1'){
            setDisabled(true)
        }
    }, [pages]);
    return (
        <div className={css.buttonFlex}>
            <button disabled={disabled} onClick={prevPage}>prev</button>


            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {ButtonActive};