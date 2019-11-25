import React from 'react';
import SearchForm from "./SearchForm";

export default function Home() {
    return (
        <div className="center-align">
            <h1>Hi There!</h1>
            <p>Enter Owners and Repository names to check all forks</p>
            <SearchForm/>
        </div>
    );
}