import { FC } from 'react';

// functional component to display vertical navigation bar
export const Nav:FC = () => {
    return (
        <div className="navBar">
            <ul>
                <li><a href="/">MEET</a></li>
                <li><a href="post">POST</a></li>
                <li><a href="follow">FEED</a></li>
            </ul>
        </div>
    );
};