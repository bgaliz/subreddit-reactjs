import React, { useEffect, useState } from 'react';

import { Toggle } from '../Toggle';
import {light_theme, dark_theme} from '../../theme';

import './styles.css';

export const Header: React.FC = () => {
    const [themeIsLight, setThemeIsLight] = useState(true);

    useEffect(() => {
        handleOnChangeTheme();
    },[]);

    function handleOnChangeTheme() {
        
        if (themeIsLight){
            document.documentElement.style.setProperty(`--primary`, `${light_theme['--primary']}`);
            document.documentElement.style.setProperty(`--gray`, `${light_theme['--gray']}`);
            document.documentElement.style.setProperty(`--gray-dark`, `${light_theme['--gray-dark']}`);
            document.documentElement.style.setProperty(`--text`, `${light_theme['--text']}`);
            document.documentElement.style.setProperty(`--white`, `${light_theme['--white']}`);
            document.documentElement.style.setProperty(`--background`, `${light_theme['--background']}`);
            document.documentElement.style.setProperty(`--orange`, `${light_theme['--orange']}`); 
        } else {
            document.documentElement.style.setProperty(`--primary`, `${dark_theme['--primary']}`);
            document.documentElement.style.setProperty(`--gray`, `${dark_theme['--gray']}`);
            document.documentElement.style.setProperty(`--gray-dark`, `${dark_theme['--gray-dark']}`);
            document.documentElement.style.setProperty(`--text`, `${dark_theme['--text']}`);
            document.documentElement.style.setProperty(`--white`, `${dark_theme['--white']}`);
            document.documentElement.style.setProperty(`--background`, `${dark_theme['--background']}`);
            document.documentElement.style.setProperty(`--orange`, `${dark_theme['--orange']}`); 
        }
        setThemeIsLight(!themeIsLight);
    }

    return (
        <div className="container-header">
            <h2>REACT</h2>
            <h2 className="JS">JS</h2>

            <Toggle onChange={handleOnChangeTheme} checked={themeIsLight}/>
        </div>
    );   
}