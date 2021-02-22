import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from './post';
import { makePost } from '../../actions/post-actions';
import { PostInfo } from '../../types';
import { RootState } from '../../reducers';

export const PostFeed:FC = () => {

    // set local state with useState hooks
    const [postText, setPostText] = useState<string>('');
    const [postTitle, setPostTitle] = useState<string>('');
    const [id, setID] = useState<string>(Math.random().toString(36).substring(7));

    // grab redux state with useSelector hook
    const posts = useSelector((state:RootState) => state.posts.posts);

    const dispatch = useDispatch();

    // handles make post instance using dispatch to actions hook
    const sendPostInfo = (postInfo:PostInfo) => {
        dispatch(makePost(postInfo));
        setPostText('');
        setPostTitle('');
        setID(Math.random().toString(36).substring(7));  
    }

    // calculate halfway index of posts to create columns of posts
    const half = Math.round(posts.length/2);

    // render error if no posts made
    if (posts.length == 0) {
        return (
        <div className="feed">
            <div className="card" id="post-title">
                <div className="row-container" id="post-title-container">
                    <h1>
                        POST TO BOARD
                    </h1>
                    <label htmlFor="postTitle" className="label">Title:</label>
                    <input value={postTitle} type="text" id="postTitle" name="postTitle" onChange={(event) => setPostTitle(event.target.value)} />
                    <label htmlFor="postText" className="label">Content:</label>
                    <input value={postText} type="text" id="postText" name="postText" onChange={(event) => setPostText(event.target.value)} />
                    <button id="post-button" type="button" onClick={() => sendPostInfo({text: postText, title: postTitle, user: 'me', id})}><span>POST</span></button>         
                </div>
            </div>
            <div className="error-container">
                <h2>There are no posts to view yet.</h2>
            </div>
        </div>
    )} else {
        return (
            <div className="feed">
                <div className="card" id="post-title">
                    <div className="row-container" id="post-title-container">
                        <h1>
                            POST TO BOARD
                        </h1>
                        <label htmlFor="postTitle" className="label">Title:</label>
                        <input value={postTitle} type="text" id="postTitle" name="postTitle" onChange={(event) => setPostTitle(event.target.value)} />
                        <label htmlFor="postText" className="label">Content:</label>
                        <input value={postText} type="text" id="postText" name="postText" onChange={(event) => setPostText(event.target.value)} />
                        <button id="post-button" type="button" onClick={() => sendPostInfo({text: postText, title: postTitle, user: 'me', id})}><span>POST</span></button>         
                    </div>
                </div>
                <div className="row-container">
                    <div className="post-feed-container">
                        {posts.slice(0,half).map((post) => (
                        <Post title={post.title} text={post.text} user={post.user} id={post.id} key={post.id} />
                        ))}
                    </div>
                    <div>
                        {posts.slice(half,posts.length).map((post) => (
                        <Post title={post.title} text={post.text} user={post.user} id={post.id} key={post.id} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }};