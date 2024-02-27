import React, {FC} from 'react';
import {Movies} from "./Movies";


interface IProps {

}

const MovieContainer: FC<IProps> = () => {



    return (
        <div>
            <Movies/>
        </div>

    );
};

export {MovieContainer};