import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/post-actions';

// all post props are required
type PostProps = {
  title: string,
  text: string,
  user: string,
  id: string,
}

// functional component to display made posts
export const Post:FC<PostProps> = ({ 
    title,
    text,
    user,
    id}: PostProps) => {
    
    const dispatch = useDispatch();

    // handles delete post instance using dispatch to actions hook
    const deleteFunc = (post) => {
        dispatch(deletePost(post))
    };

    return (
        <div className="card" id="post">
            <div className="row-container" id="post-container">
                <div className="profile-bio">
                    <div className="row-container" id="card-title-container">
                        <h2>{ title }</h2>
                        <button type="button" id="delete" onClick={() => deleteFunc({title, text, user, id})}><span className="plus">&#10005;</span></button>
                    </div>
                    <h3>Author: @{ user }</h3>
                    <div className="profile-info">
                        { text }
                    </div>
                </div>
            </div>
        </div>
)};
