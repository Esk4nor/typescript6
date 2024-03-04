import React, {FC} from 'react';
import {Search} from "../components/search/Search";

interface IProps {
}

const SearchPage: FC<IProps> = () => {
    return (
        <div>
            <Search/>
        </div>
    );
};

export {SearchPage};