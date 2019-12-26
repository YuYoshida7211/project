import * as React from 'react';
import Header from '../components/Header';
import * as H from 'history';
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps {
    history: H.History
}

export default class Facebook extends React.Component<Props>{
    render() {
        return (
            <React.Fragment>
                <Header {...this.props} />
                <p>facebook</p>
            </React.Fragment>

        );
    }
}
