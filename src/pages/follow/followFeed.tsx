import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../reducers';
import { Card } from '../lib/card';

// functional component to display feed of all DALI members that are followed
export const FollowFeed:FC = () => {

    // grab redux state with useSelector hook
    const people = useSelector((state:RootState) => state.people.people);

    // get members you follow
    const following = people.filter((profile) => {
        return profile.follow == '1';
    });
    // render error if following no one
    if (following.length === 0) {
        return (
            <div className="feed">
                <div className="card" id="feed-title">
                    <div className="row-container">
                        <h1>MEMBERS YOU FOLLOW</h1>
                    </div>
                </div>
                <div className="error-container" id="follow-error">
                    <h2>You are not following any DALI members yet.</h2>
                    <Link to="/" id="error-container-button">MEET SOME</Link>
                </div>
            </div>
        );  
    } else {
        return (
            <div className="feed">
                <div className="card" id="feed-title">
                    <div className="row-container">
                        <h1>MEMBERS YOU FOLLOW</h1>
                    </div>
                </div>
                {following.map((profile) => (
                    <Card name={profile.name} 
                        quote={profile.quote} 
                        year={profile.year} 
                        gender={profile.gender} 
                        home={profile.home} 
                        role={profile.role} 
                        picture={profile.picture}
                        follow={profile.follow}
                        key={profile.name} />
                    ))}
            </div>
        );  
}};
