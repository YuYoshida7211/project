import React from 'react';
import '../../../css/moviebox.css';
import { getTime } from '../service/Date';
import { imageUrl } from '../const/imageUrl'

export const Moviebox = (props) => {
    let src = "https://www.youtube.com/embed/" + props.result.id;
    let postMovieDays = getTime(props.result.snippet.publishedAt);

    return (
        <div className="youtube-flexitem item1">
            <div className="youtube-video_box">
                <iframe
                    allowFullScreen
                    className="youtube-iframe"
                    src={src}>

                </iframe>
            </div>
            <div className="youtube-youtube_info">
                <div className="youtube-left-box">
                    <img src={imageUrl.logo} className="youtube-icon" />
                </div>
                <div className="youtube-right-box">
                    <p className="youtube-user-name"><b>{props.result.snippet.channelTitle}</b></p>
                    <p className="youtube-user-id">投稿日</p>
                    <div className="youtube-text-area">
                        <div className="youtube-text-wrap">
                            {postMovieDays}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}