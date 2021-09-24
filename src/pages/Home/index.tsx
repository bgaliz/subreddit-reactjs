import React, { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';

import { NavButton } from '../../components/NavButton';
import { Feed } from '../../components/Feed';

import { HotPosts, NewestPosts, TopPosts } from '../../services/get.posts';

import './styles.css'

export const Home: React.FC = () => {
    const INITIALIZE_LIMIT = 10
    const MAX_LIMIT = 100

    const [posts, setPosts] = useState([]);
    const [limitOfPosts, setLimitOfPosts] = useState(INITIALIZE_LIMIT);
    const [topicSelected, setTopicSelected] = useState('Hot');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const inicialize = async () => {
            handleGetPostsByTopicChoosen(topicSelected)
        }
        inicialize();
    },[limitOfPosts])

    async function handleGetPostsByTopicChoosen(topic: string){
        setTopicSelected(topic);

        if(topicSelected !== topic) {
            setIsLoading(!isLoading);
            setLimitOfPosts(INITIALIZE_LIMIT);
        }

        if(topic === 'Hot'){
            setTopicSelected(topic)
            await HotPosts(limitOfPosts)
            .then(list => {
                setPosts(list);
            });
        } else if (topic === 'News'){
            setTopicSelected(topic)
            await NewestPosts(limitOfPosts)
            .then(list => {
                setPosts(list);
            });
        } else {
            setTopicSelected(topic)
            await TopPosts(limitOfPosts)
            .then(list => {
                setPosts(list);
            });
        }

        setIsLoading(false);
    }

    function handleGetMorePosts() {
        if(limitOfPosts <= MAX_LIMIT) {
            setLimitOfPosts(limitOfPosts + 10);
        }
        handleGetPostsByTopicChoosen(topicSelected)
    }

    return (
        <div className="main">
            <div className="wrap">
                <div className="container-navigation">
                    <NavButton 
                        text="Hot" 
                        onClick={() => handleGetPostsByTopicChoosen('Hot')} 
                        state={topicSelected === 'Hot'}
                    />
                    <NavButton 
                        text="News" 
                        onClick={() => handleGetPostsByTopicChoosen('News')} 
                        state={topicSelected === 'News'}
                    />
                    <NavButton 
                        text="Rising" 
                        onClick={() => handleGetPostsByTopicChoosen('Rising')} 
                        state={topicSelected === 'Rising'}
                    />
                </div>
                {
                    isLoading 
                    ?
                    <div className="container-loading">
                        <ReactLoading type="spin" color='#A7B0BE' height={100} width={100} />
                    </div>
                    :
                    <Feed 
                        posts={posts} 
                        limitOfPosts={limitOfPosts} 
                        MAX_LIMIT={MAX_LIMIT}
                        handleGetMorePosts={handleGetMorePosts}
                    />
                }
            </div>
        </div>
    );
}