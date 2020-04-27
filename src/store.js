import { createStore } from 'redux';
import rootReducer from './reducers';
import { searchYoutube } from './actions/youtubeSearch';

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const mapSearchDispatchToProps = (dispatch) => {
    return {
        searchYoutube: (keyword) => {
            searchYoutube(keyword).then(dispatch);
        }
    };
};