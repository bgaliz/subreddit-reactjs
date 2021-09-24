import React from 'react';

import { FaSun, FaMoon } from 'react-icons/fa'

import './styles.css'

interface ToggleProps {
    checked: boolean,
    onChange: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({ onChange, checked }: ToggleProps) => {
    return (
        <div className="container-toggle">
            <label className="switch" onChange={onChange}>
                <FaSun className="Sun"/>
                <input type="checkbox" checked={!checked} onChange={onChange} />
                <span className="slider round"></span>
                <FaMoon className="Moon"/>
            </label>
        </div>
    );
}