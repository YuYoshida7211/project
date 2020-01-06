// 初期State
const initialState = {
    result: {},
    // activeIcon: 'twitter',
    iconStatus: {
        instagram: 'inactive-icon',
        youtube: 'inactive-icon',
        twitter: 'active-icon',
        facebook: 'inactive-icon',
        tiktok: 'inactive-icon',
        googlePlay: 'inactive-icon',
        qiita: 'inactive-icon',
    }
}
// Reducer処理
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTRESULTJSON': {
            return Object.assign({}, state, {
                result: action.value,
            });
        }
        // case 'CHANGEACTIVEICON': {
        //     return Object.assign({}, state, {
        //         activeIcon: action.value,
        //     });
        // }
        case 'CHANGEICONTWITTER': {
            return Object.assign({}, state, {
                iconStatus: Object.assign({}, state.iconStatus, {
                    twitter: 'active-icon',
                    youtube: 'inactive-icon',
                }),
            });
        }
        case 'CHANGEICONYOUTUBE': {
            return Object.assign({}, state, {
                iconStatus: Object.assign({}, state.iconStatus, {
                    youtube: 'active-icon',
                    twitter: 'inactive-icon',
                }),
            });
        }

        default: {
            return state
        }
    }
}

export default reducer