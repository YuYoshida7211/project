import React from 'react';
import '../../../css/twittermodal.css';
export const Twittermodal = (props) => {
    // console.log(props)
    return (
        <div className="modal-wrapper" id={props.uniqueId}>
            <a href="#!" className="modal-overlay"></a>
            <div className="modal-window">
                <div className="modal-content">
                    <img src={props.result.profile_image_url} />
                    <p>{props.result.user_name}</p>
                    <p>@{props.result.user_screen_name}</p>
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