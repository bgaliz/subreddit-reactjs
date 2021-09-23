import React from 'react';

import { FaPlus } from 'react-icons/fa'

import './styles.css'

interface ButtonProps {
    text: string
    disabled: boolean
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    disabled,
    onClick,
}:ButtonProps) => {
    return (
        <button 
            className="seeMoreArticles" 
            disabled={disabled}
            onClick={onClick} 
        >
            <FaPlus />
            <h4>{text}</h4>
        </button>
    )
}