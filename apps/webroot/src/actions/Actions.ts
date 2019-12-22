import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const Actions = {
    Action1: actionCreator<string>('ACTIONS_1'),
    ACtion2: actionCreator<string>('ACTIONS_2')
};