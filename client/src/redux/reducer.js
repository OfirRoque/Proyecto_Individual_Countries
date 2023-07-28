import { SAVE_COUNTRIES, FILTER_CONTINENT, SAVE_ACTIVITIES, FILTER_ACTIVITIES, A_Z_COUNTRIES, SET_PAGES, SEARCH_COUNTRY, GET_NAMES } from "./actionTypes";

const initialState = {
    countries: [],
    activities: [],
    countriesNames: [],
    page: 0
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_NAMES:
            return {
                ...state,
                countriesNames: payload
            }
        case SAVE_COUNTRIES: 
            return {
                ...state,
                countries: payload, 
            }
        case FILTER_CONTINENT:
            return {
                ...state,
                countries: payload
            }
        case SAVE_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }
        case FILTER_ACTIVITIES:
            return {
                ...state,
                countries: payload
            }
        case A_Z_COUNTRIES:
            return {
                ...state,
                countries: payload
            }
        case SET_PAGES:
            return {
                ...state,
                page: payload.value
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: payload
            }
        default:
            return {
                ...state
            }
    }
}


export default reducer;