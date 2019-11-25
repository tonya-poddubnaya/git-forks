import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {fetchRepository} from "../actions";


class SearchForm extends Component {
    formSubmit(val) {
        this.props.fetchRepository(val.ownersName, val.repositoryName , 1);
        this.props.history.push(`/search/1/${val.repositoryName}/${val.ownersName}`);
    }

    render() {
        return (
            <div className="row">
                <form className="col s12 valign-wrapper" onSubmit={this.props.handleSubmit((values) => this.formSubmit(values))}>
                    <div className="input-field col l4 s12 inputs">
                        <div className="row">
                            <label>Owners Name</label>
                            <Field name='ownersName' type="text" component='input'/>
                        </div>
                    </div>
                    <div className="input-field col l4 s12 inputs">
                        <div className="row">
                            <label>Repository Name</label>
                            <Field type='text' name='repositoryName' component='input'/>
                        </div>
                    </div>
                    <button className="btn" type='submit'>Search</button>
                </form>
            </div>
        );
    }
}


SearchForm = reduxForm({
    form: 'searchForm'
})(SearchForm);

SearchForm = withRouter(SearchForm);

function mapStateToProps(state) {
    return {forks: state.forks};
}

export default connect(mapStateToProps, {fetchRepository})(SearchForm);