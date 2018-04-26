import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';
import imagesReducer from './imagesReducer';


const allReducers = combineReducers({
    loginData: loginReducer,
    signUpData:signUpReducer,
    imageData:imagesReducer
});

export default allReducers;