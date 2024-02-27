import React, {FC, useEffect, useState} from 'react';
import {movieService} from "../service/movieService";
import {MovieContainer} from "../components/MoviesContainer/MovieContainer";
import {IMovie, IResults} from "../interfaces/iMovie";
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

interface IProps {
}

const MainLayout: FC<IProps> = () => {


    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};