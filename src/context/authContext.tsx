import {createContext, PropsWithChildren, useContext} from 'react'

export const authContex = createContext(null);

interface props {
    value:any;
}

export const AuthProvider:React.FC<PropsWithChildren<props>> = ({children, value}) => {
    return <authContex.Provider value={value}>{children}</authContex.Provider>
}

export const useAuthValue = () => {
    return useContext(authContex);
}