import { createReducer } from "../../app/common/util/reducerUtils";
import { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG } from "./blogConstants";

const initialState = [
    {
        id: '1',
        title: 'Trip to Tokyo',
        date: '2019-11-20',
        content: 
        'Lorem ipsum dolor sit amet, lectus arcu sed donec donec et enim, metus suscipit viverra a. Vehicula ut a vitae, erat sagittis sapien dui praesent nisl, felis tortor porttitor non vitae vitae mattis, metus imperdiet ultrices molestie erat turpis volutpat. A occaecat a imperdiet sed aenean. Dolor placerat convallis. Eget ut sit nunc laoreet, conubia arcu tempor, nam feugiat mauris sed sagittis mus porttitor, in quam in.',
        city: 'Tokyo',
        postedBy: 'Tam',
        comments: [
            {
                id: 'b',
                name: 'Quy',
                content: 'bbbbbbbb',
            },

            {
                id: 'c',
                name: 'Vy',
                content: 'cccccccc',
            }

        ]
    },
    {
        id: '2',
        title: 'Bad days in London',
        date: '2019-11-20',
        content: 
        'Lorem ipsum dolor sit amet, lectus arcu sed donec donec et enim, metus suscipit viverra a. Vehicula ut a vitae, erat sagittis sapien dui praesent nisl, felis tortor porttitor non vitae vitae mattis, metus imperdiet ultrices molestie erat turpis volutpat. A occaecat a imperdiet sed aenean. Dolor placerat convallis. Eget ut sit nunc laoreet, conubia arcu tempor, nam feugiat mauris sed sagittis mus porttitor, in quam in.',
        city: 'UK',
        postedBy: 'Huan',
        comments: [
            {
                id: 'b',
                name: 'Quy',
                content: 'Thanks for sharing',
            },

            {
                id: 'c',
                name: 'Vy',
                content: 'I do not care',
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