import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signupReducer';



const allReducers = combineReducers({
    loginData: loginReducer,
    signUpData:signUpReducer
});

export default allReducers;