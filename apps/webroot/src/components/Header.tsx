import * as React from 'react';
import { MouseEvent } from 'react';
import * as H from 'history';

interface Props {
    history: H.History
}
export default class Header extends React.Component<Props>{

    private click(event: MouseEvent, url: string) {
        console.log(this.props)
        // event.preventDefault();
        this.props.history.push(url);
    }
    render() {
        return (
            <React.Fragment>
                <p onClick={(event) => this.click(event, '/instagram')}>instagram</p>
                <p onClick={(event) => this.click(event, '/facebook')}>facebook</p>
                <p onClick={(event) => this.click(event, '/tiktok')}>tiktok</p>
                <p onClick={(event) => this.click(event, '/youtube')}>instagram</p>
            </React.Fragment>

        );
    }
}
