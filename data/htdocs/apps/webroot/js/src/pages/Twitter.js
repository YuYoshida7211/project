import React from 'react'
import { imageUrl } from '../const/imageUrl';
import { Postbox } from '../components/Postbox';
import { Twittermodal } from '../components/Twittermodal';
import NaviContainer from '../containers/NaviContainer';
import { choiceService, choicePost } from '../service/Choice';
import resultJson from '../../../../api_result/result.json';
import { getResultJson } from '../fetch/Fetch'
import '../../../css/twitter.css';

export default class Twitter extends React.Component {
    componentDidMount() {
        const usePosts = choiceService(resultJson, 'twitter_result');
        const useData = choicePost(resultJson, 'twitter_result', usePosts);
        this.props.registTwitterList(useData);
        getResultJson('https://jsondata.okiba.me/v1/json/3DG6U200109154755');
    }
    render() {
        let postArea = [];
        // const key = timeStamp()
        if (Object.keys(this.props.result.twitter).length) {
            for (let i = 0; i < this.props.result.twitter.length; i++) {
                postArea.push(<Postbox result={this.props.result.twitter[i]} key={i} uniqueId={i} />)
                postArea.push(<Twittermodal result={this.props.result.twitter[i]} key={i + 10} uniqueId={i} />)
            }
        } else {
            postArea = ['ローディングコンポーネント表示']
        }
        return (
            <React.Fragment>
                {/**
             * TODO:検索実装時のフォーム
             <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet" />
            <form method="get" action="#" class="search_container">
                <input type="text" size="25" placeholder="気になるワードを検索" />
                <input type="submit" value="&#xf002" />
            </form> */}
                <NaviContainer props={this.props} />
                <div className="main-box">
                    <img className="contents-left" src={imageUrl.contentsLeft} />
                    <img className="contents-right" src={imageUrl.contentsRight} />
                    <div className="flexcontainer">
                        {postArea}
                    </div>
                    <div className="more-text">
                        <label htmlFor="trigger" className="open_button">MORE</label>
                    </div>

                </div>


            </React.Fragment>

        )

    }
}