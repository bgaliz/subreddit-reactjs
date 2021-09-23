import React, { useEffect, useState } from 'react';

import { NavButton } from '../../components/NavButton';
import { Post } from '../../components/Post';
import { Button } from '../../components/Button';

import { HotPosts, NewestPosts, TopPosts } from '../../services/get.posts';

import './styles.css'

interface PostDataProps {
    data: PostProps
}

interface PostProps {
    title: string,
    author: string,
    domain: string,
    thumbnail: string,
    created_utc: number,
    url: string,
    permalink: string
}

export const Home: React.FC = () => {
    const INITIALIZE_LIMIT = 25
    const MAX_LIMIT = 100

    const [posts, setPosts] = useState([]);
    const [limitOfPosts, setLimitOfPosts] = useState(INITIALIZE_LIMIT);
    const [topicSelected, setTopicSelected] = useState({hot: true, news: false, rising: false});

    useEffect(() => {
        const inicialize = async () => {
            getPosts()
        }
        inicialize();
    },[limitOfPosts])

    async function handleGetHotPosts() {
        setTopicSelected({hot: true, news: false, rising: false})
        await HotPosts(limitOfPosts)
        .then(list => {
            setPosts(list);
            
        });
    }

    async function handleGetNewestPosts() {
        setTopicSelected({hot: false, news: true, rising: false})
        await NewestPosts(limitOfPosts)
        .then(list => {
            setPosts(list);
        });
    }

    async function handleGetRisingPosts() {
        setTopicSelected({hot: false, news: false, rising: true})
        await TopPosts(limitOfPosts)
        .then(list => {
            setPosts(list);
        });
    }

    function handleGetMorePosts() {
        if(limitOfPosts <= MAX_LIMIT) {
            setLimitOfPosts(limitOfPosts + 25);
        }
        getPosts()
    }

    function getPosts() {
        if(topicSelected.hot){
            handleGetHotPosts();
        } else if (topicSelected.news){
            handleGetNewestPosts();
        } else {
            handleGetRisingPosts();
        }
    }

    return (
        <div className="main">
            <div className="wrap">
                <div className="container-navigation">
                    <NavButton 
                        text="Hot" 
                        onClick={handleGetHotPosts} 
                        state={topicSelected.hot}
                    />
                    <NavButton 
                        text="News" 
                        onClick={handleGetNewestPosts} 
                        state={topicSelected.news}
                    />
                    <NavButton 
                        text="Rising" 
                        onClick={handleGetRisingPosts} 
                        state={topicSelected.rising}
                    />
                </div>
                <div className="container-feed">
                    {
                        posts.map((post: PostDataProps, index) => {
                            const image = post.data.thumbnail.indexOf('http') >= 0 ? post.data.thumbnail : ''
                            const domain = post.data.domain === 'self.reactjs' ? post.data.url : post.data.domain

                            return (
                                <Post
                                    key={index}
                                    title={post.data.title}
                                    domain={domain}
                                    image={image}
                                    nickname={post.data.author}  
                                    created_at={post.data.created_utc}   
                                    permalink={post.data.permalink}  
                                />
                            )
                        })
                    }
                </div>
                <Button
                    text="Ver mais"
                    onClick={handleGetMorePosts}
                    disabled={limitOfPosts === MAX_LIMIT}
                />
            </div>
        </div>
    );
}