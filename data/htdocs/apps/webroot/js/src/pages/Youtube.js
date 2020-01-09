import React from 'react'
import { imageUrl } from '../const/imageUrl';
import { Moviebox } from '../components/Moviebox';
import NaviContainer from '../containers/NaviContainer';
import { getResultJson } from '../fetch/Fetch';
import { choiceMovieKey, choiceMovie } from '../service/Choice';
import { Loading } from '../components/Loading'

import '../../../css/youtube.css';

export default class Youtube extends React.Component {
    componentDidMount() {
        getResultJson('https://jsondata.okiba.me/v1/json/3DG6U200109154755',
            (rseponse) => {
                const randomKeys = choiceMovieKey()
                console.log(rseponse)
                let youtubeData = choiceMovie(rseponse, randomKeys);
                this.props.registYoutubeList(youtubeData)
            }
        )
    }
    loaded() {
        console.log('road!')
    }

    render() {
        let movieArea = [];
        if (Object.keys(this.props.result.youtube).length) {
            for (let i = 0; i < this.props.result.youtube.length; i++) {
                movieArea.push(<Moviebox loaded={this.loaded} result={this.props.result.youtube[i]} key={i} />)
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