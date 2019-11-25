import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.css';
import Home from './Home';
import SearchResult from "./SearchResult";
import * as actions from '../actions';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path='/' component={Home}/>
                <Route exact path='/search/:page/:repositoryName/:owner'
                       render={
                        routeProps => <SearchResult
                            {...routeProps}
                            page={routeProps.match.params.page}
                            repositoryName={routeProps.match.params.repositoryName}
                            owner={routeProps.match.params.owner}
                        />
                       }
                />
            </BrowserRouter>
        </div>
    );
}

export default connect(null, actions)(App);