import React from 'react';

import './styles.css'

interface ButtonProps {
    text: string,
    state: boolean
    onClick: () => void,
}

export const NavButton: React.FC<ButtonProps> = ({
    text, 
    state,
    onClick, 
}: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className={state ? 'selected' : ''}
        >
            <h4 className="text">{ text }</h4>
        </button>
    );
}