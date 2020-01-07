export const choiceService = (data, target) => {
    const choiceKey = Object.keys(data[target]);
    for (let i = choiceKey.length - 1; i >= 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        [choiceKey[i], choiceKey[r]] = [choiceKey[r], choiceKey[i]]
    }
    const usePosts = choiceKey.slice(0, 4);
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
            useData.push(useCategory[i].items[randomKeys[j]])
        }
    }
    return useData;
}


