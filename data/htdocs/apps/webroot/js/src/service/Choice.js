import React from 'react';
import { replaceIndention } from './Validate'
export const choiceService = (data, target) => {
    const choiceKey = Object.keys(data[target]);
    for (let i = choiceKey.length - 1; i >= 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        [choiceKey[i], choiceKey[r]] = [choiceKey[r], choiceKey[i]]
    }
    const usePosts = choiceKey;
    return usePosts;
}

export const choicePost = (data, target, usePosts) => {
    const jsonData = data[target];
    const postKeyArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let useCategory = [];
    let useData = [];
    // カテゴリ4つ選択
    for (let i = 0; i < usePosts.length; i++) {
        useCategory.push(jsonData[usePosts[i]])
    }
    for (let i = postKeyArray.length - 1; i >= 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        [postKeyArray[i], postKeyArray[r]] = [postKeyArray[r], postKeyArray[i]]
    }
    const randomKeys = postKeyArray.slice(0, 2);
    for (let i = 0; i < useCategory.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (useCategory[i].items[randomKeys[j]] !== undefined) {
                useData.push(useCategory[i].items[randomKeys[j]])
                replaceIndention(useData[i].text);
                console.log(useData[i].text)
            }
        }
    }
    return useData;
}

export const choiceMovieKey = () => {
    let keyArray = [];
    const GETMOVIENUM = 10;
    for (let i = 0; i < GETMOVIENUM; i++) {
        keyArray.push(i)
    }
    for (let i = keyArray.length - 1; i >= 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        [keyArray[i], keyArray[r]] = [keyArray[r], keyArray[i]]
    }
    const randomKeys = keyArray.slice(0, 10);
    return randomKeys;
}

export const choiceMovie = (resultData, keyArray) => {
    const movies = resultData.youtube_result.items;

    for (let i = movies.length - 1; i >= 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        [movies[i], movies[r]] = [movies[r], movies[i]]
    }
    let choiceMovies = []
    for (let i = 0; i < keyArray.length; i++) {
        choiceMovies.push(movies[keyArray[i]])
    }
    return choiceMovies;
}