import React from 'react';
import '../../../css/postbox.css';
import { imageUrl } from '../const/imageUrl'

export const Postbox = (props) => {
    // console.log(props)
    return (
        <div className="flexitem item1">
            <a href={'#' + props.uniqueId}>
                <div className="box">
                    <div className='left-box'>
                        <img src={props.result.profile_image_url} className='icon' />
                    </div>
                    <div className='right-box'>
                        <p className="user-name"><b>{props.result.user_name}</b></p>
                        <p className="user-id">@{props.result.user_screen_name}</p>
                        <div className="text-area">
                            <div className='text-wrap'>
                                {props.result.text}
                            </div>
                            <p className="splet">...</p>
                        </div>
                    </div>

                </div>
                <div className="more-wrap">
                    <div className="more">続きを見る</div>
                </div>
            </a>

        </div>
    )
}