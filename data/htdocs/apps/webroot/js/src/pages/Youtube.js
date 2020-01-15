import React from 'react'
import { imageUrl } from '../const/imageUrl';
import { Moviebox } from '../components/Moviebox';
import NaviContainer from '../containers/NaviContainer';
import { getResultJson } from '../fetch/Fetch';
import { choiceMovieKey, choiceMovie } from '../service/Choice';
import { Loading } from '../components/Loading'

import '../../../css/youtube.css';
import { timestamp } from '../service/Date'
export default class Youtube extends React.Component {
    componentDidMount() {
        const fullUrl = location.href + '/api/result';
        const url = fullUrl.replace('/youtube', '');
        getResultJson(url,
            (rseponse) => {
                const randomKeys = choiceMovieKey()
                let youtubeData = choiceMovie(rseponse, randomKeys);
                this.props.registYoutubeList(youtubeData)
            }
        )
    }

    render() {
        let movieArea = [];
        if (Object.keys(this.props.result.youtube).length) {
            for (let i = 0; i < this.props.result.youtube.length; i++) {
                movieArea.push(<Moviebox result={this.props.result.youtube[i]} key={i} />)
            }
        } else {
            movieArea = <Loading />;
        }
        return (
            <React.Fragment>
                <NaviContainer props={this.props} />
                <div className="main-box">
                    <img className="contents-left" src={imageUrl.contentsLeft} />
                    <img className="contents-right" src={imageUrl.contentsRight} />
                    <div className="flexcontainer">
                        {movieArea}
                    </div>
                    <div className="more-text">
                        <label htmlFor="trigger" className="open_button">MORE</label>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}