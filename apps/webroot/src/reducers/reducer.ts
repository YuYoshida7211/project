import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Actions } from '../actions/Actions';

const initialState = {
}

export const reducer = reducerWithInitialState(initialState)
    .case(Actions.Action1, (state, name) => {
        return Object.assign({}, state, { name });
    })
