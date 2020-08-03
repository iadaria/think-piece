import React, { useEffect } from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import Posts from './Posts';
import Authentication from './Authentication';
import UserProfile from './UserProfile';
import PostPage from './PostPage';

function Application() {

    useEffect(() => {
        const parseData = window.location.pathname.split("/");
        console.log('pathname', window.location.pathname);
        console.log('domain 0', parseData[0]);
        console.log('domain 1', parseData[1]);
    }, [])

    return (
        <main className="Application">
            <Link to="/think-piece/">
                <h1>Think Piece</h1>
            </Link>
            <Authentication />
            <Switch>
                <Route exact path="/think-piece/" component={Posts}/>
                <Route exact path="/think-piece/profile" component={UserProfile}/>
                <Route exact path="/think-piece/posts/:id" component={PostPage}/>
            </Switch>
        </main>
    );

}

export default Application;
