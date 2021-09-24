import React from 'react';

import { HotPosts, NewestPosts, TopPosts } from '../services/get.posts';

const limit = 10

test('É para coletar os artigos do reddit, trazendo os artigos EM DESTAQUE', async () => {
    await HotPosts(limit)
    .then(list => {
        expect(list).not.toEqual(null)
    })  
})

test('É para coletar os artigos do reddit, trazendo os artigos NOVOS', async () => {
    await NewestPosts(limit)
    .then(list => {
        expect(list).not.toEqual(null)
    })  
})

test('É para coletar os artigos do reddit, trazendo os artigos MAIS VOTADOS', async () => {
    await TopPosts(limit)
    .then(list => {
        expect(list).not.toEqual(null)
    })  
})