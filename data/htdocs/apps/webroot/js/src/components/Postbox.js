import React from 'react';
import '../../../css/postbox.css';
import { imageUrl } from '../const/imageUrl'

export const Postbox = (result) => {
    return (
        <div className="flexitem item1">
            <a href="#modal-01">
                <div className="box">
                    <div className='left-box'>
                        <img src={result.result.profile_image_url} className='icon' />
                    </div>
                    <div className='right-box'>
                        <p className="user-name"><b>{result.result.user_name}</b></p>
                        <p className="user-id">@{result.result.user_screen_name}</p>
                        <div className="text-area">
                            <div className='text-wrap'>
                                {result.result.text}
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