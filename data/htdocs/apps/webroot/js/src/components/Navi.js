import React from 'react';
import '../../../css/navi.css';
import { imageUrl } from '../const/imageUrl'



export class Navi extends React.Component {
    constructor(props) {
        super(props);
    }
    transition(url, callback) {
        this.props.props.history.push(url);
        callback;
    }
    render() {
        return (
            <div className="main-content">
                <div className="sns-icons">
                    <img className={this.props.iconStatus.instagram} id="instagram" src={imageUrl.instagram.comingsoon} />
                    <img className={this.props.iconStatus.youtube} id="youtube" src={imageUrl.youtube.icon}
                        onClick={(e) => {
                            this.transition('/youtube'), this.props.changeIconYoutube();
                        }} />
                    <img className={this.props.iconStatus.twitter} id="twitter" src={imageUrl.twitter.icon}
                        onClick={(e) => {
                            this.transition('/'), this.props.changeIconTwitter()
                        }} />
                    <img className={this.props.iconStatus.facebook} id="facebook" src={imageUrl.facebook.comingsoon} />
                    <img className={this.props.iconStatus.tiktok} id="tiktok" src={imageUrl.tiktok.comingsoon} />
                    <img className={this.props.iconStatus.googlePlay} id="googlePlay" src={imageUrl.googlePlay.comingsoon} />
                    <img className={this.props.iconStatus.qiita} id="qiita" src={imageUrl.qiita.comingsoon} />
                </div>
            </div>
        )
    }
}