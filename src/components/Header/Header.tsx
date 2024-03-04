import React, {FC, useContext} from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ContextChecker} from "../../hoc/ContextProvider";



interface IProps {
}

const Header: FC<IProps> = () => {
    const {handleChange,check,setCheck} = useContext(ContextChecker);

        return (
        <div className={check?css.Headerdark:css.Header}>
            <div>
                <div className={css.navigateBox}>
                <div className={css.paddingSt}>MovieDB</div>
                <NavLink className={css.paddingSt} to={'movie'}>Movie</NavLink>
                <NavLink className={css.paddingSt} to={'genre'}>Genre</NavLink>
                </div>
                <label>Click for change team
                    <input type="checkbox" checked={check} onChange={handleChange}/>
                </label>

            </div>
            <div>
                <div>Name</div>
                <div><NavLink to={'search'}>Search</NavLink></div>
            </div>
        </div>
    );
        };

export {Header};