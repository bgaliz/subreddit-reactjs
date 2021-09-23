import axios from 'axios'

export async function HotPosts(limit: number) {
    return await axios.get(`
        https://www.reddit.com/r/reactjs/hot.json?limit=${limit}`
    )
    .then(res => {
        if(res.status !== 200) {
            console.log('Falha ao requisitar os posts hot de subreddit reactjs')
        }
        
        if (res.data !== null ) {
            return res.data.data.children
        }
    })
}

export async function NewestPosts(limit: number) {
    return await axios.get(`
        https://www.reddit.com/r/reactjs/new.json?limit=${limit}
    `)
    .then(res => {
        if(res.status !== 200) {
            console.log('Falha ao requisitar os posts news de subreddit reactjs')
        }
        
        if (res.data !== null ) {
            return res.data.data.children
        }
    })
}

export async function TopPosts(limit: number) {
    return await axios.get(`
        https://www.reddit.com/r/reactjs/top.json?limit=${limit}
    `)
    .then(res => {
        if(res.status !== 200) {
            console.log('Falha ao requisitar os posts top de subreddit reactjs')
        }

        if (res.data !== null ) {
            return res.data.data.children
        }
    })
}