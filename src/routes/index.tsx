import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from '../pages/lib/nav';
import { Feed } from '../pages/meet/feed';
import { PostFeed } from '../pages/post/postFeed';
import { FollowFeed } from '../pages/follow/followFeed';


const FallBack = () => {
    return <div>Could not find URL</div>;
};

const AppRoutes:FC = () => {
    return (
        <Router>
            <div className="row-container" id="main">
            <Switch>
                <Route exact path="/" component={Feed} />
                <Route path="/post" component={PostFeed} />
                <Route path="/follow" component={FollowFeed} />
                <Route component={FallBack} />
            </Switch>
            <Nav />
            </div>
        </Router>
    );
};

export default AppRoutes;