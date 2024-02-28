import React, {createContext, FC, PropsWithChildren} from 'react';


const Context = createContext<number>(null)

interface IProps extends PropsWithChildren{

}

const ContextProvider: FC<IProps> = ({children}) => {
    return (
        <div>
            <Context.Provider value={111}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {ContextProvider, Context};