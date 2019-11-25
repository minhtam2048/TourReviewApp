import { createReducer } from "../../app/common/util/reducerUtils";
import { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG } from "./blogConstants";

const initialState =  [
    {
        id: '1',
        title: 'Trip to Genza - Tokyo',
        date: '2019-06-22',
        category: 'lowCostTrip',
        description: 'Lorem ipsum dolor sit amet, sapien elit. Quis vel duis hendrerit voluptate magna at, vivamus augue fusce dictumst nulla labore pharetra, vestibulum nam enim ipsum dolor integer dignissim, mi integer. Id dui sodales. Tincidunt neque orci nulla gravida risus donec, montes orci viverra nascetur in lorem vel.',
        city: 'Tokyo',
        address: 'Lorem ipsum dolor sit amet',
        postedBy: 'Tachibana',
        postPhotoURL: 'https://randomuser.me/api/portraits/women/22.jpg',
        commentors: [
            {
                id: 'a',
                name: 'Lynch',
                photoURL: 'https://randomuser.me/api/portraits/men/75.jpg',
                content: 'Thank you'
            },
            {
                id: 'b',
                name: 'Obama',
                photoURL: 'https://randomuser.me/api/portraits/women/18.jpg',
                content: 'Must visit this place!'
            },
            {
                id: 'c',
                name: 'Noma',
                photoURl: 'https://randomuser.me/api/protraits/women/37.jpg',
                content: 'wow, so beautiful!!'
            }

        ]
    },
    {
        id: '2',
        title: 'Shinee Turkey',
        date: '2019-06-22',
        category: 'foods',
        description: 'Lorem ipsum dolor sit amet, sapien elit. Quis vel duis hendrerit voluptate magna at, vivamus augue fusce dictumst nulla labore pharetra, vestibulum nam enim ipsum dolor integer dignissim, mi integer. Id dui sodales. Tincidunt neque orci nulla gravida risus donec, montes orci viverra nascetur in lorem vel.',
        city: 'Tokyo',
        address: 'Lorem ipsum dolor sit amet',
        postedBy: 'Aoi',
        postPhotoURL: 'https://randomuser.me/api/portraits/women/40.jpg',
        commentors: [
            {
                id: 'a',
                name: 'Lynch',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
                content: 'Thank you'
            },
            {
                id: 'b',
                name: 'Obama',
                photoURL: 'https://randomuser.me/api/portraits/women/18.jpg',
                content: 'Must visit this place!'
            },
            {
                id: 'c',
                name: 'Noma',
                photoURL: 'https://randomuser.me/api/portraits/women/37.jpg',
                content: 'wow, so beautiful!!'
            }

        ]
    },
    {
        id: '3',
        title: 'Food in Vietname is so delicous and cheap !',
        date: '2019-06-22',
        category: 'culture',
        description: 'Lorem ipsum dolor sit amet, sapien elit. Quis vel duis hendrerit voluptate magna at, vivamus augue fusce dictumst nulla labore pharetra, vestibulum nam enim ipsum dolor integer dignissim, mi integer. Id dui sodales. Tincidunt neque orci nulla gravida risus donec, montes orci viverra nascetur in lorem vel.',
        city: 'Tokyo',
        address: 'Lorem ipsum dolor sit amet',
        postedBy: 'Robin',
        postPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        commentors: [
            {
                id: 'a',
                name: 'Lynch',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
                content: 'Thanks for sharing'
            },
            {
                id: 'b',
                name: 'Obama',
                photoURL: 'https://randomuser.me/api/portraits/women/18.jpg',
                content: 'Must visit this place!'
            },
            {
                id: 'c',
                name: 'Noma',
                photoURL: 'https://randomuser.me/api/portraits/women/37.jpg',
                content: 'yummy~~'
            }
        ]
    }
];

const createBlog = (state, payload) => {
    return [...state, payload.blog]
}

const updateBlog = (state, payload) => {
    return [
        ...state.filter(blog => blog.id !== payload.blog.id), payload.blog
    ];
};

const deleteBlog = (state, payload) => {
    return [
        ...state.filter(blog => blog.id !== payload.blogId)
    ]
}

export default createReducer(initialState, {
    [CREATE_BLOG]: createBlog,
    [UPDATE_BLOG]: updateBlog,
    [DELETE_BLOG]: deleteBlog,
});