import React, {useState} from 'react';
import {LanguageContext} from "./index";

const Contex = ({children}) => {
    const [Language, setLanguage] = useState('en-US')

    return (
        <LanguageContext.Provider value={{Language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default Contex;