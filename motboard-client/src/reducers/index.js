import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';
import imagesReducer from './imagesReducer';
import publicMotBoardReducer from './publicBoardsReducer';
import getuserboards from './getuserboards';
import getblogs from './getblogs';


const allReducers = combineReducers({
    loginStateData: loginReducer,
    signUpData:signUpReducer,
    imageData:imagesReducer,
    publicMotBoardData: publicMotBoardReducer,
    getuserboards:getuserboards,
    blogsdata:getblogs
});

export default allReducers;