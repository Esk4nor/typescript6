import React, {FC} from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

interface IProps {
}

const Header: FC<IProps> = () => {
    return (
        <div className={css.Header}>
            <div>
                <div className={css.navigateBox}>
                <div>MovieDB</div>
                <NavLink to={'movie'}>Movie</NavLink>
                <NavLink to={'genre'}>Genre</NavLink>
                </div>
                <div>Team</div>
            </div>
            <div>
                <div>Name</div>
                <div>Search</div>
            </div>
        </div>
    );
};

export {Header};