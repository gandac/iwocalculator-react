import * as actionTypes from '../actionTypes';
import {CONFIG_ENDPOINT_URL} from 'state/constants';
import apiCall from 'utils/api';

export const getConfig = () => {
    return dispatch => {
        dispatch(initConfig());
        apiCall.get(CONFIG_ENDPOINT_URL)
            .then( response => {
                dispatch(storeConfig(response.data))
            } )
            .catch( error => {
                dispatch(setConfigError(error))
            } );
    }
}

export const initConfig = () => {
    return {
        type: actionTypes.GET_CONFIG_REQUEST
    }
}

export const storeConfig = (data) => {
    return {
        type: actionTypes.GET_CONFIG_SUCCESS,
        config: data
    }
}

export const setConfigError = (error) => {
    return {
        type: actionTypes.GET_CONFIG_ERROR,
        error: error
    }
}
