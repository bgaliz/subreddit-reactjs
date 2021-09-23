import React, { useEffect, useState } from 'react';

import { FaNewspaper, FaLink } from 'react-icons/fa'

import './styles.css'

interface PostProps {
    title: string,
    nickname: string,
    domain: string,
    image: string,
    created_at: number,
    permalink: string
}

export const Post: React.FC<PostProps> = ({
    title,
    nickname,
    domain,
    image,
    created_at,
    permalink
}) => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const dayCreatedPost = new Date(created_at * 1000);
        const now = new Date();
        const diff = Math.abs(now.getTime() - dayCreatedPost.getTime()); 

        const day = Math.ceil(diff / (1000 * 60 * 60 * 24));
        const hours = Math.ceil(diff / (1000 * 60 * 60));
        const minutes = Math.ceil(diff / (1000 * 60));

        if (minutes <= 60) {
            setDateTime(`${minutes} minutos`);
        } else if (hours <= 24) {
            if(hours > 1) {
                setDateTime(`${hours} horas`)
            } else {
                setDateTime(`${hours} hora`)
            }
        } else {
            setDateTime(`${day} dias`);
        }
        
    },[]);

    function handleGetImageOrSvg() {
        if(image) {
            return <img src={image} alt="thumbnail.png" />
        } else if (domain.indexOf('www.reddit.com') >= 0) {
            return <FaNewspaper />
        } else {
            return <FaLink />
        }
    }

    return (
        <article className="container-post" >
            <div className="container-imagem">
                    {
                        handleGetImageOrSvg()
                    }
                </div>
                <div className="details-post">
                    <a href={`https://www.reddit.com/${permalink}`} target="_blank">
                        <h4 className="title">{title}</h4>
                    </a>
                    <p className="sentBy">Enviado a {dateTime} por <a href={`https://www.reddit.com/user/${nickname}/`}>{nickname}</a></p>
                    <a href={domain} className="domain">
                        {domain}
                    </a>
                </div>
        </article>
    );
}