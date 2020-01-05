import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import { Twitter } from './pages/Twitter';

class App extends React.Component {
    render() {
        console.log(Twitter)
        return (
            <React.Fragment>
                <HomeContainer />
                <Router>
                    <Route exact path={'/'} component={Twitter} />
                    <Route exact path={'/twitter'} component={Twitter} />
                    {/* <Route exact path={'/youtube'} component={Youtube} /> */}
                </Router >
            </React.Fragment>
        );
    }
}

export default App;