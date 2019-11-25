import React, {Component} from 'react';
import SearchForm from './SearchForm';
import Pagination from './Pagination';
import {connect} from "react-redux";
import {fetchRepository} from "../actions";
import {STATE_LOADING} from "../actions/stateTypes";


class SearchResult extends Component {
    render() {
        const renderResults = () => {
            const {forks, owner, repositoryName, page} = this.props;
            if (forks === STATE_LOADING) {
                return (<tr><th>Loading...</th></tr>);
            }else if (forks.length > 0) {
                return Object.keys(forks).map((fork) => {
                    return (
                        <tr key={forks[fork].id}>
                            <td>{forks[fork].full_name}</td>
                            <td>{forks[fork].owner.login}</td>
                            <td>{forks[fork].stargazers_count}</td>
                            <td>{forks[fork].html_url}</td>
                        </tr>
                    );
                });
            }
            else if (!forks) {
                return (<tr><th>Nothing to show</th></tr>);
            } else {
                this.props.fetchRepository(owner, repositoryName, page);
            }
        };
        return (
            <div>
                <SearchForm/>
                <table className="striped">
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Owner</th>
                        <th>Stars</th>
                        <th>Repository URL</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderResults()}
                    </tbody>
                </table>
                <Pagination curPage={this.props.page} owner={this.props.owner} repo={this.props.repositoryName}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        forks: state.forks
    }
}

export default connect(mapStateToProps, {fetchRepository})(SearchResult);
