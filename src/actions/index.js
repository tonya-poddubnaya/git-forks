import axios from 'axios';
import {FETCH_REPOSITORY, LOADING} from "./types";

export const fetchRepository = (owner, repositoryName, page) => {
    return function (dispatch) {
        dispatch({type: LOADING, payload: true});
        axios
            .get(`https://api.github.com/repos/${owner}/${repositoryName}/forks?page=${page}`)
            .then(res => {
                console.log(res);
                dispatch({type: FETCH_REPOSITORY, payload: res.data});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: FETCH_REPOSITORY, payload: false});
            });
    };
};