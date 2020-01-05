import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path={'/'} component={HomeContainer} />
            </Router >
        );
    }
}

export default App;