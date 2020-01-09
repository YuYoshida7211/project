import React from 'react';
import '../../../css/twittermodal.css';
export const Twittermodal = (props) => {
    return (
        <div className="modal-wrapper" id={props.uniqueId}>
            <a href="#!" className="modal-overlay"></a>
            <div className="modal-window">
                <div className="modal-content">
                    <div className="modal-user-content">
                        <div className="modal-icon-wrap">
                            <img src={props.result.profile_image_url} className="modal-icon" />
                        </div>
                        <div className="modal-user-wrap">
                            <p className="modal-user-name">{props.result.user_name}</p>
                            <p className="modal-user-id">@{props.result.user_screen_name}</p>
                        </div>
                    </div>
                    <p>{props.result.text}</p>
                    {/* <div>
                        <img src={props.result.media.} />
                    </div> */}
                </div>
                <a href="#!" className="modal-close">×</a>
            </div>
        </div>
    )
}