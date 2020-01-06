import React from 'react'
import { imageUrl } from '../const/imageUrl';
import { Postbox } from '../components/Postbox';
import { Twittermodal } from '../components/Twittermodal';
import NaviContainer from '../containers/NaviContainer';

import '../../../css/twitter.css';

export const Youtube = (props) => {
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
            <NaviContainer props={props} />
            <div className="main-box">
                <img className="contents-left" src={imageUrl.contentsLeft} />
                <img className="contents-right" src={imageUrl.contentsRight} />
                <div className="flexcontainer">
                    <Postbox />
                    <Twittermodal />
                    <Postbox />
                    <Twittermodal />
                    <Postbox />
                    <Twittermodal />
                    <Postbox />
                    <Twittermodal />
                    <Postbox />
                    <Twittermodal />
                    <Postbox />
                    <Twittermodal />
                    <Postbox />
                    <Twittermodal />
                    <Postbox />
                    <Twittermodal />
                </div>
                <div className="more-text">
                    <label htmlFor="trigger" className="open_button">MORE</label>
                </div>

            </div>


        </React.Fragment>

    )
}