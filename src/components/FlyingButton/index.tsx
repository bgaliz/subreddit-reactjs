import React, { useEffect, useState } from 'react';

import { FaArrowUp } from 'react-icons/fa'

import './styles.css'

export const FlyingButton: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            if(window.pageYOffset > 300) {
                setShowButton(true)
            } else {
                setShowButton(false);
            }
        });
    },[])


    function handleGetAtTheTopOfPage() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button 
            onClick={handleGetAtTheTopOfPage}
            className={`flying-button ${showButton ? 'showButton' : 'hideButton'}`}
        >
            <FaArrowUp />
        </button>
    )
}