import { combineReducers } from "redux";
import repositoryReducer from './repositoryReducer';
import { reducer as reduxForm } from 'redux-form';


export default combineReducers({
    forks: repositoryReducer,
    form: reduxForm
});