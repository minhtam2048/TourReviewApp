export const objectToArray = (object) => {
    if(object) {
        return Object.entries(object).map(e => Object.assign({}, e[1], {id: e[0]}))
    }
}

export const createNewBlog = (user, photoURL, blog, firestore) => {
    return {
        ...blog,
        posterUid: user.uid,
        postedBy: user.displayName,
        postPhotoURL: photoURL || '/assets/user.png',
        likers: {
            [user.uid]: {
                liking: true,
                joinDate: firestore.FieldValue.serverTimestamp(),
                photoURL: photoURL || '/assets/user.png',
                displayName: user.displayName,
                poster: true
            }
        }
    }
};

export const createDataTree = dataset => {
    let hashTable = Object.create(null);
    dataset.forEach(a => hashTable[a.id] = {...a, childNodes: []});
    let dataTree = [];
    dataset.forEach(a => {
        if (a.parentId) hashTable[a.parentId].childNodes.push(hashTable[a.id]);
        else dataTree.push(hashTable[a.id])
    });
    return dataTree
};