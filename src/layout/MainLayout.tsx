import React, {FC} from 'react';

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