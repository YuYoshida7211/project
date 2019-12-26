import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TwitterContainer from '../container/TwitterContainer';
import InstagramContainer from '../container/InstagramContainer';
import YoutubeContainer from '../container/YoutubeContainer';
import FacebookContainer from '../container/FacebookContainer';
import TikTokContainer from '../container/TikTokContainer';

export interface AppProps { compiler: string; framework: string; }
export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <Router>
                <Route exact path={'/'} component={TwitterContainer} />
                <Route path={'/instagram'} component={InstagramContainer} />
                <Route path={'/youtube'} component={YoutubeContainer} />
                <Route path={'/facebook'} component={FacebookContainer} />
                <Route path={'/tiktok'} component={TikTokContainer} />
            </Router>
        );
    }
}