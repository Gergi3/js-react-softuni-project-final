import { createContext } from "react";
import { useEffect, useState } from 'react';

import * as articleServices from '../services/articleServices';

export const ArticleContext = createContext();

export const ArticleProvider = ({
    children
}) => {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        articleServices.getAll()
            .then(res => {
                console.log(res);
                setArticles(res);
            })
    }, []);

    return (
        <ArticleContext.Provider value={{articles}}>
            {children}
        </ArticleContext.Provider>
    );
}