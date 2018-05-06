import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';
import imagesReducer from './imagesReducer';
import publicMotBoardReducer from './publicBoardsReducer';
import getuserboards from './getuserboards';
import getblogs from './getblogs';
import popularReducer from './popularReducer';


const allReducers = combineReducers({
    loginStateData: loginReducer,
    signUpData:signUpReducer,
    popularData:popularReducer,
    imageData:imagesReducer,
    publicMotBoardData: publicMotBoardReducer,
    getuserboards:getuserboards,
    blogsdata:getblogs
});

export default allReducers;