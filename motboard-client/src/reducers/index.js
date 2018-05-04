import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';
import imagesReducer from './imagesReducer';
import publicMotBoardReducer from './publicBoardsReducer';


const allReducers = combineReducers({
    loginStateData: loginReducer,
    signUpData:signUpReducer,
    imageData:imagesReducer,
    publicMotBoardData: publicMotBoardReducer
});

export default allReducers;