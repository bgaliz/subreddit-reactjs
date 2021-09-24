import React from 'react';

import { Button } from '../Button';
import { Post } from '../Post';

interface FeedProps {
    posts: never[],
    limitOfPosts: number,
    MAX_LIMIT: number
    handleGetMorePosts: () => void
}

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

export const Feed: React.FC<FeedProps> = ({
    posts,
    limitOfPosts,
    MAX_LIMIT,
    handleGetMorePosts,
}: FeedProps) => {
    return (
        <main>
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
            <Button
                text="Ver mais"
                onClick={handleGetMorePosts}
                disabled={limitOfPosts === MAX_LIMIT}
            />
        </main>
    );
}