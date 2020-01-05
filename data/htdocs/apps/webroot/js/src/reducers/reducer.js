// 初期State
const initialState = {
    result: {},
}
// Reducer処理
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETAPIRESULT': {
            return Object.assign({}, state, {
                result: action.value,
            });
        }
        default: {
            return state
        }
    }
}

export default reducer