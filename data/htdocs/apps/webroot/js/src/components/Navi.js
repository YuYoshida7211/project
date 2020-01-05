import React from 'react';
import '../../../css/navi.css';
import { imageUrl } from '../const/imageUrl'

export const Navi = (props) => {
    const transiition = (url) => {
        props.props.history.push(url)
    }
    return (
        <div className="main-content">
            <div className="sns-icons">
                <img className="instagram-icon" src={imageUrl.instagram.comingsoon} />
                <img className="youtube-icon" src={imageUrl.youtube.icon} onClick={(e) => { transiition('/youtube') }} />
                <img className="twitter-icon" src={imageUrl.twitter.icon} />
                <img className="facebook-icon" src={imageUrl.facebook.comingsoon} />
                <img className="tiktok-icon" src={imageUrl.tiktok.comingsoon} />
                <img className="tiktok-icon" src={imageUrl.googlePlay.comingsoon} />
                <img className="tiktok-icon" src={imageUrl.qiita.comingsoon} />
            </div>
        </div>
    )
}