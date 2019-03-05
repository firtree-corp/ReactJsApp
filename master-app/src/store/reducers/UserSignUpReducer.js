import TYPES from '../../actions/types';

const INITIAL_STATE = {
    error: false,
    msg: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_SUCCESS:
            return { ...state, msg: action.msg };
        case TYPES.SIGN_FAILURE:
            return { ...state, error: true, msg: action.msg };
        case TYPES.DISABLE_LOG_ERROR:
            return { ...state, error: false, msg: "" };
        default:
            return state;
    }
};