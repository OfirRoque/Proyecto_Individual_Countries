import { SAVE_COUNTRIES, FILTER_CONTINENT, SAVE_ACTIVITIES, FILTER_ACTIVITIES, A_Z_COUNTRIES, SET_PAGES, SEARCH_COUNTRY, GET_NAMES } from "./actionTypes.js"
import axios from "axios";

export const getCountries = () => {
    const endpoint = "http://localhost:3001/countries";
    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint);
            return dispatch({
                type: SAVE_COUNTRIES,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getNamesCountries = () => {
    const endpoint = "http://localhost:3001/countries";
    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint);
            const names = data.map(e => e.name);
            return dispatch({
                type: GET_NAMES,
                payload: names
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const filterContinent = (value) => {
    const endpoint = "http://localhost:3001/countries";
    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint);
            let filter
            if(value !== "todos"){
                filter = data.filter(e => e.continent === value);
            } else {
                filter = data
            }
            return dispatch({
                type: FILTER_CONTINENT,
                payload: filter
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getActivities = () => {
    const endpoint = "http://localhost:3001/activities";
    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint);
            return dispatch({
                type: SAVE_ACTIVITIES,
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const filterActivities = (activity) => {
    const endpoint = "http://localhost:3001/countries";
    
    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint);
            let filter
            if(activity !== "activity"){
                filter = data.filter(e => e.activity.some(e => e.name === activity))
            } else {
                filter = data
            }
            return dispatch({
                type: FILTER_ACTIVITIES,
                payload: filter
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}


export const azCountries = (countries) => {
    return {
        type: A_Z_COUNTRIES,
        payload: countries,
    }
}

export const setPages = (value) => {
    return {
        type: SET_PAGES,
        payload: {
            value: value
        }
    }
}

export const searchCountry = (name) => {
    const endpoint = "http://localhost:3001/countries/name/nombre";
    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint + "?name=" + name);
            return dispatch({
                type: SEARCH_COUNTRY,
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

